const express = require("express");
const router = express.Router();

// Controller
const {
    campaignCreation,
    activeCampaignsGetter

} = require("../controllers/campaign.controller");

// Core
router.post("/create", campaignCreation);
router.get("/activeCampaigns",activeCampaignsGetter)
module.exports = router;