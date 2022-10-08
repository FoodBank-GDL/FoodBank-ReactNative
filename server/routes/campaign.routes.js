const express = require("express");
const router = express.Router();

// Controller
const {
    campaignCreation,
    homeCardGetter

} = require("../controllers/campaign.controller");

// Core
router.post("/create", campaignCreation);
router.get("/homeCards",homeCardGetter)
module.exports = router;