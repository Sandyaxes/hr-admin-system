const express = require("express");
const router = express.Router();
const { login, addEmployee } = require("./auth");
const { adminAuth } = require("../Middleware/auth")

router.route("/login").post(login);
router.route("/createEmployee").post(addEmployee);
// router.route("/update").put(adminAuth, update)
// router.route("/deleteUser").delete(adminAuth, deleteUser)

module.exports = router;