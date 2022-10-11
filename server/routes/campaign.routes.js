const express = require("express");
const router = express.Router();

// Controller
const {
    campaignCreation,
    homeCardGetter,
    campaignInfoGetter

} = require("../controllers/campaign.controller");

// Core
router.post("/create", campaignCreation);
router.get("/homeCards/:userId", homeCardGetter)
router.get("/info/:campaignId", campaignInfoGetter)
module.exports = router;