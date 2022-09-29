const {
    registerUser,
    loginUser,
    testGet,
} = require("../models/UserClass");

controller = {};

controller.getTesting = async (req, res) => {
    try {
        const response = await testGet()

        res.send(response)
    } catch {
        // error
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
    } catch {
        // error
    }
};

module.exports = controller;