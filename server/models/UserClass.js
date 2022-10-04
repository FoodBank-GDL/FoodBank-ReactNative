const {Firestore, db, FirebaseAuth, auth } = require('../utils/firebase_config');
const { where } = require("firebase/firestore");

class UserClass {
    static async loginUser(body) {
        try {
            const login = await FirebaseAuth.signInWithEmailAndPassword(auth, body.email, body.password)
            .then((loginCredentials)=>{
                return{"credentials":loginCredentials};
            }).catch(error=>{
                return { "message": error.code, "status": "error" };
            })

            if (login.status==="error"){
                throw new Error(login.message);
            }else{
                return login;
            }

        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async registerUser(body) {
        try {
            const email = body.email;
            const password = body.password;

            const re = await FirebaseAuth.createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    return { "userCredentials": userCredential };
                })
                .catch((error) => {
                    return { "message": error.code, "status": "error" };
                });


            if (re.status === "error") {
                throw new Error(re.message)
            } else {
                try{
                    const reFireStore = await Firestore.addDoc(Firestore.collection(db,"usuarios"),{
                        email:body.email,
                        nombre:body.nombre,
                        telefono:body.telefono
                    }).catch((error)=>{
                        return { "message": error.code, "status": "error" };
                    });
                } catch(err) {
                    throw new Error(reFireStore.message)
                }
                return re
            }


        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateUser(body) {
        try {
            const userInfo = {
                userId: body.userId,
                email: body.email,
                telefono: body.telefono,
                ubicacion: body.ubicacion
            }
            console.log(userInfo);
            try {
                const myQuery=Firestore.query(Firestore.collection(db, "usuarios"), where("userId", "==", userInfo.userId));
                const querySnap=await Firestore.getDocs(myQuery);
                querySnap.forEach((currDoc)=>{
                    Firestore.updateDoc(currDoc.ref, userInfo);
                });
                return {status:201};
            } catch (err) {
                throw new Error(err.message);
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