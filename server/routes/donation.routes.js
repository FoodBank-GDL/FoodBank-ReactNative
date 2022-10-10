const express = require("express");
const router = express.Router();

// Controller
const {
    donationCreate,
    campaignDonationsGet
} = require("../controllers/donation.controller");

// Core
router.post("/create", donationCreate);
router.get("/campaignDonations/:campaignId", campaignDonationsGet);

module.exports = router;