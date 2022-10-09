const express = require("express");
const router = express.Router();

// Controller
const {
    donationCreate,
    dontationErase
} = require("../controllers/donation.controller");

// Core
router.post("/create", donationCreate);
router.delete("/deleteDonation", dontationErase);

module.exports = router;