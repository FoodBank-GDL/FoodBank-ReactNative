const express = require("express");
const router = express.Router();

// Controller
const {
    donationCreate,
    dontationErase,
    campaignDonationsGet
} = require("../controllers/donation.controller");

// Core
router.post("/create", donationCreate);
router.delete("/deleteDonation", dontationErase);
router.get("/campaignDonations/:campaignId", campaignDonationsGet);

module.exports = router;