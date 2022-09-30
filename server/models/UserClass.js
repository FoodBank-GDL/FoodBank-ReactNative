const Firebase=require('firebase/app');
const FirebaseAuth=require('firebase/auth');
const auth=require('../utils/firebase_auth_config');

//const Parse = require("../utils/parse_config");


class UserClass {
    static async loginUser(body) {
        try{

        }catch(error){

        }
    }

    static async registerUser(body) {
        console.log("estamos en la clase");
        try {
            //Aqui metemos la logica de firebase
            //console.log(body);
            const email=body.email;
            const password=body.password;
            FirebaseAuth.createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 

                //console.log(userCredential);
                const user = userCredential.user;
                return {"userCredentials":userCredential};
                // ...
            })
            .catch((error) => {
                throw error;
            });

        } catch (error) {
            print("error en la clase");
            throw error;
        }
    }

    static async testGet() {
        return { "ping": "pong" }
    }

}

module.exports = UserClass;