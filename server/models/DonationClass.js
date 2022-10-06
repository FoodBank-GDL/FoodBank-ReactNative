const { where } = require('firebase/firestore');
const {Firestore, db } = require('../utils/firebase_config');

class DonationClass {

    static async createDonation(){
        try{
            return "ok";
        }catch(error){
            throw new Error(error);
        }
    }


}

module.exports = DonationClass;