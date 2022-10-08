const express = require("express");
const router = express.Router();

// Controller
const {
    userLogin,
    userRegister,
    getTesting,
    userUpdate,
} = require("../controllers/user.controller");

// Core
router.get("/test", getTesting);
router.post("/login", userLogin);
router.post("/register", userRegister);
router.put("/updateUserInfo", userUpdate);

module.exports = router;