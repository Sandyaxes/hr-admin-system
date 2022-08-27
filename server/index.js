const express = require("express");
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth, managerAuth } = require("./Middleware/auth");

const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", require("./Auth/route"));
app.get("/admin", adminAuth, (req, res) => res.send("Admin Route"));
app.get("/basic", userAuth, (req, res) => res.send("User Route"));
app.get("/manager", managerAuth, (req, res) => res.send("Manager Route"));
// app.post("/add")

app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});

const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
);
// Handling Error
process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
