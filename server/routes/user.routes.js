const express = require("express");
const router = express.Router();

// Controller
const {
    userLogin,
    userRegister,
    getTesting,
} = require("../controllers/user.controller");

// Core
router.get("/test", getTesting)
router.post("/login", userLogin);
router.post("/register", userRegister);

module.exports = router;