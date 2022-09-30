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
        console.log("Estamos en el controller");
        const response = await registerUser(req.body);

        res.send(response);
    } catch(error){
        console.log("Error en controller");
        //console.log(error);
        res.status(404).send(error.message);
        // error
    }
};

module.exports = controller;