const {
    createCampaign
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

module.exports = controller;