const express = require("express");
const router = express.Router();

// Controller
const {
    donationCreate,
    campaignDonationsGet,
    userDonationStatusChange
} = require("../controllers/donation.controller");

// Core
router.post("/create", donationCreate);
router.get("/campaignDonations/:campaignId", campaignDonationsGet);
router.put("/changeStatus", userDonationStatusChange);

module.exports = router;