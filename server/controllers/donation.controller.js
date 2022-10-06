const {
    createDonation
} = require("../models/DonationClass");

controller = {};

controller.donationCreate = async (req, res) => {
    try {
        const response = await createDonation();

        res.send(response);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

module.exports = controller;