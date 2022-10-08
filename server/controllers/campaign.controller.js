const {
    createCampaign,
    getActiveCampaigns
} = require("../models/CampaignClass");

controller = {};

controller.campaignCreation = async (req, res) => {
    try {
        const response = await createCampaign(req.body);

        res.send(response);
    } catch (error) {
        res.status(404).send(error.message);
    }
};
controller.activeCampaignsGetter = async (req, res) => {
    try {
        const response = await getActiveCampaigns();
        res.send(response);
    } catch (error) {
        res.status(404).send(error.message);
    }
};


module.exports = controller;