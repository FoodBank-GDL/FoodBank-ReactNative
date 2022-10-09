const { where } = require("firebase/firestore");
const { Firestore, db } = require("../utils/firebase_config");

class DonationClass {
  static async createDonation(body) {
    try {
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

  static async deleteDonation(body) {
    try {

    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = DonationClass;
