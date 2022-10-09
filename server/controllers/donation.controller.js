const { 
  createDonation,
  eraseDonation
} = require("../models/DonationClass");

controller = {};

controller.donationCreate = async (req, res) => {
  try {
    const response = await createDonation(req.body);

    res.send(response);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

controller.dontationErase = async (req, res) => {
  try {
    const response = await eraseDonation(req.body);
    res.send(response);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = controller;
