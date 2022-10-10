const { where } = require("firebase/firestore");
const { Firestore, db } = require("../utils/firebase_config");
const userClass=require("../models/UserClass");


class DonationClass {
  static async createDonation(body) {
    try {
      console.log(body);
      const reFireStore = await Firestore.addDoc(
        Firestore.collection(db, "donations"),
        {
          userId: body.userId,
          campaignId: body.campaignId,
          cantidad: body.cantidad,
          medida: body.medida,
          producto: body.producto,
          estado:body.estado
        }
      ).catch((error) => {
        return { message: error.code, status: "error" };
      });
      return reFireStore;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getCampaignDonations(campaignId) {
    try {
      const campaignDonationsQuery = Firestore.query(
        Firestore.collection(db, "donations"),
        where("campaignId","==",campaignId)
      );
      const campaignDonationsQuerySnap = await Firestore.getDocs(campaignDonationsQuery);
      const campaignDonationsObject=campaignDonationsQuerySnap.docs.map((doc) => doc.data());
      

      const formatedInfo={};
      //We add user, status, and create an empty array of donations for each user
      for(const donation of campaignDonationsObject){
        formatedInfo[donation.userId]={};
        const currUserInfo=await userClass.userInfoGet(donation);
        formatedInfo[donation.userId]['user']=currUserInfo[0]
        formatedInfo[donation.userId]['estado']='completado';
        formatedInfo[donation.userId]['donaciones']=[];
      }

      //Now we add the donation info to each user
      for(const donation of campaignDonationsObject){
        if(donation.estado=='pendiente'){
          formatedInfo[donation.userId]['estado']='pendiente';
        }
        formatedInfo[donation.userId]['donaciones'].push(donation);
      }

      const res=[];
      for(const i in formatedInfo){
        res.push(formatedInfo[i]);
      }

      return res;



    } catch (error) {
      throw new Error(error);
    }
  }

  static async changeUserDonationStatus(body) {
    try {

      return "works"
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = DonationClass;
