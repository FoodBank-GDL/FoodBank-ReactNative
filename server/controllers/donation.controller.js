const { createDonation, getCampaignDonations } = require("../models/DonationClass");

controller = {};

controller.donationCreate = async (req, res) => {
  try {
    const response = await createDonation(req.body);

    res.send(response);
  } catch (error) {
    res.status(404).send(error.message);
  }
};


controller.campaignDonationsGet = async (req, res) => {
  try {
    const response = await getCampaignDonations(req.params.campaignId);

    res.send(response);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = controller;
