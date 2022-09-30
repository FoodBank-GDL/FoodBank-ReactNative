const {
    registerUser,
    loginUser,
    testGet,
} = require("../models/UserClass");

controller = {};

controller.getTesting = async (req, res) => {
    try {
        const response = await testGet()
        console.log(response)
        res.send(response)
    } catch (error) {
        // error
        res.status(404).send(error.message)
    }
}

controller.userLogin = async (req, res) => {
    try {
        const response = await loginUser(req.body);

        res.send(response);
    } catch {
        // error
    }
};

controller.userRegister = async (req, res) => {
    try {
        const response = await registerUser(req.body);

        res.send(response);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

module.exports = controller;