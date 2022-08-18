const connectDB = require("../db");
const express = require("express");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const jwtSecret =
  "9368c7b47fc5f844aa4c4914654304d54e442521d47fb64b5cf057160e265ebb03f198";

const app = express();
app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

const addEmployee = async (req, res, next) => {
  try {
    const { first_name, last_name, telephone, email, manager, role } = req.body;
    const employee = await connectDB.query(
      `INSERT INTO employees 
        (first_name, last_name, password, telephone, email, manager, role) 
        VALUES 
        (${first_name}, ${last_name}, ${telephone}, ${email}, ${manager}, ${role})`
    );

    let message = "Error in creating programming language";

    if (result.affectedRows) {
      message = "Programming language created successfully";
    }

    return { message };
  } catch (error) {
    res.status(400).send("unable to save to database");
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    await connectDB.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password],
      function (error, results, fields) {
        if (results.length > 0) {
          results = JSON.parse(JSON.stringify(results))[0];
          const maxAge = 3 * 60 * 60;
          console.log(results.id, username, results.role);

          const token = jwt.sign(
            { id: results.id, username, role: results.role },
            jwtSecret,
            {
              expiresIn: maxAge, // 3hrs in sec
            }
          );
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000, // 3hrs in ms
          });
          res.status(200).json({
            message: "User successfully Logged in",
            role: results.role,
          });
        } else {
          res.status(401).json({
            message: "Login not successful",
            // error: "User not found",
          });
        }
      }
    );
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

module.exports = { login };
