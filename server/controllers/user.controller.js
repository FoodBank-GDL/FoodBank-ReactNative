const { updateCurrentUser } = require("firebase/auth");
const {
    registerUser,
    loginUser,
    testGet,
    updateUser,
    userInfoGet
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
    } catch(error) {
        res.status(404).send(error.message);

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

controller.userUpdate = async (req, res) => {
    try {
        const response = await updateUser(req.body);

        res.send(response);
    } catch (error) {
        res.status(418).send(error.message); // Don't know what error it should be.
    }
};

controller.userInfoGetter=async (req, res) => {
    try {
        const response = await userInfoGet(req.params.userId);

        res.send(response);
    } catch (error) {
        res.status(418).send(error.message); // Don't know what error it should be.
    }
};

module.exports = controller;