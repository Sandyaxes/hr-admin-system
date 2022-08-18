const express = require("express");
const router = express.Router();
const { login }  = require("./auth");
const { adminAuth } = require("../Middleware/auth")

router.route("/login").post(login);
// router.route("/update").put(adminAuth, update)
// router.route("/deleteUser").delete(adminAuth, deleteUser)

module.exports = router;