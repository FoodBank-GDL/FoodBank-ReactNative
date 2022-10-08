const express = require("express");
const router = express.Router();

// Controller
const {
    userLogin,
    userRegister,
    getTesting,
    userUpdate,
    userInfoGetter
} = require("../controllers/user.controller");

// Core
router.get("/test", getTesting);
router.get("/info", userInfoGetter);
router.post("/login", userLogin);
router.post("/register", userRegister);
router.put("/updateUserInfo", userUpdate);

module.exports = router;