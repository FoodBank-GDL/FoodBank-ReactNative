const express = require("express");
const router = express.Router();

// Controller
const {
    campaignCreation
} = require("../controllers/campaign.controller");

// Core
router.post("/create", campaignCreation);

module.exports = router;