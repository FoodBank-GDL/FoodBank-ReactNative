// const Firebase=require('firebase/app');
// const FirebaseAuth=require('firebase/auth');
const { FirebaseAuth, auth } = require('../utils/firebase_auth_config');

//const Parse = require("../utils/parse_config");


class UserClass {
    static async loginUser(body) {
        try {

        } catch (error) {

        }
    }

    static async registerUser(body) {
        try {
            //Aqui metemos la logica de firebase
            const email = body.email;
            const password = body.password;

            const re = await FirebaseAuth.createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 

                    const user = userCredential.user;
                    return { "userCredentials": userCredential };
                })
                .catch((error) => {
                    return { "message": error.code, "status": "error" };
                });

            if (re.status === "error") {
                throw new Error(re.message)
            } else {
                return re
            }

        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async testGet() {
        try {
            throw new Error("Something went wrong!");
        } catch (error) {
            throw new Error(error);
        }
    }

}

module.exports = UserClass;