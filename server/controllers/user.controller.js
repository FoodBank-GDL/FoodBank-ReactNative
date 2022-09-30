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
        console.log("Respuesta")
        console.log(response);

        res.send(response);
    } catch (error) {
        console.log("error en el controller");
        console.log(error)
        console.log("este era el error")
        //console.log(error);
        res.status(404).send(error.message);
        // error
    }
};

module.exports = controller;