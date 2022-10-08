const { where } = require("firebase/firestore");
const { Firestore, db } = require("../utils/firebase_config");
async function updateDocuments(userId) {
  try {
    const myQuery = Firestore.query(
      Firestore.collection(db, "campaigns"),
      where("userId", "==", userId),
      where("isActive", "==", true)
    );
    const querySnap = await Firestore.getDocs(myQuery);
    querySnap.forEach((currDoc) => {
      Firestore.updateDoc(currDoc.ref, { isActive: false });
    });
  } catch (error) {
    throw new Error(error);
  }
}


async function getUserDonations(userId){
  try{
    const myQuery = Firestore.query(
      Firestore.collection(db, "donations"),
      where("userId", "==", userId)
    );
    const querySnap = await Firestore.getDocs(myQuery);
    return querySnap.docs.map((doc) => doc.data());

  }catch(error){
    throw new Error(error)
  }
}

class CampaignClass {
  static async getHomeCardInfo(userId) {
    try {
      //tambien queremos saber cuales campañas son
      /*
      PRIMERO QUIERO LA ACTIVE CAMPAIGN DEL USUARIO (TE LO PASO COMO)

      {
        userCampaign: [{}]
        donativosPendientes:[{}]
        donativosCompletados:[{}]
        activeCampaigns:[{}]
      }

      
      */

      //Active campaigns que no sean del usuario
      const activeCampaignsQuery = Firestore.query(
        Firestore.collection(db, "campaigns"),
        where("isActive", "==", true),
        where("userId","!=",userId)
      );
      const activeCampaignsQuerySnap = await Firestore.getDocs(activeCampaignsQuery);
      const activeCampaignsObject=activeCampaignsQuerySnap.docs.map((doc) => doc.data());

      //Campaign del usuario
      const userCampaignQuery = Firestore.query(
        Firestore.collection(db, "campaigns"),
        where("isActive", "==", true),
        where("userId","==",userId)
      );
      const userCampaignQuerySnap = await Firestore.getDocs(userCampaignQuery);
      const userCampaignObject=userCampaignQuerySnap.docs.map((doc) => doc.data());

      //Donaciones pendientes
      const pendingDonationsQuery = Firestore.query(
        Firestore.collection(db, "donations"),
        where("userId", "==", userId),
        where("estado","==","pendiente")
      );
      const pendingDonationsQuerySnap = await Firestore.getDocs(pendingDonationsQuery);
      const pendingDonationsObject=pendingDonationsQuerySnap.docs.map((doc) => doc.data());

      //Donaciones completadas
      const completedDonationQuery = Firestore.query(
        Firestore.collection(db, "donations"),
        where("userId", "==", userId),
        where("estado","==","completado")
      );
      const completedDonationQuerySnap = await Firestore.getDocs(completedDonationQuery);
      const completedDonationsObject=completedDonationQuerySnap.docs.map((doc) => doc.data());





      return {
        userCampaign: userCampaignObject,
        activeCampaigns: activeCampaignsObject,
        pendingDonations: pendingDonationsObject,
        completedDonations: completedDonationsObject
      };





    } catch (error) {
      throw new Error(error);
    }
  }

  static async createCampaign(body) {
    try {
      await updateDocuments(body.userId);
      const reFireStore = await Firestore.addDoc(
        Firestore.collection(db, "campaigns"),
        {
          userId: body.userId,
          titulo: body.titulo,
          descripcion: body.descripcion,
          accesibilidad: body.accesibilidad,
          fechaInicio: Firestore.Timestamp.fromDate(new Date(body.fechaInicio)),
          fechaExpiracion: Firestore.Timestamp.fromDate(
            new Date(body.fechaExpiracion)
          ),
          ubicacion: body.ubicacion,
          donativosTotales: 0,
          metaDonativos: body.metaDonativos,
          isActive: true,
          categoriaFrutasVerduras: body.categoriaFrutasVerduras,
          categoriaRopa: body.categoriaRopa,
          categoriaNoPerecederos: body.categoriaNoPerecederos,
          categoriaEnseres: body.categoriaEnseres,
        }
      ).catch((error) => {
        return { message: error.code, status: "error" };
      });
      return reFireStore;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CampaignClass;
