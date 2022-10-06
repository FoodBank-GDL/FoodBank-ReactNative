const express = require("express");
const router = express.Router();

// Controller
const {
    donationCreate
} = require("../controllers/donation.controller");

// Core
router.post("/create", donationCreate);

module.exports = router;