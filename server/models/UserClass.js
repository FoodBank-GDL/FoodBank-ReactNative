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
        console.log("estamos en la clase");
        try {
            //Aqui metemos la logica de firebase
            //console.log(body);
            const email = body.email;
            const password = body.password;
            FirebaseAuth.createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 

                    //console.log(userCredential);
                    const user = userCredential.user;
                    return { "userCredentials": userCredential };
                    // ...
                })

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