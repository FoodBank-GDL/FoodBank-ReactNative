const { where, doc, getDoc } = require("firebase/firestore");
const { Firestore, db } = require("../utils/firebase_config");
const userClass = require("../models/UserClass");

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

async function completeCampaignInfo(campRef) {
  try {
    const activeCampaignsObject = [];

    campRef.forEach(async (currDoc) => {
      const currInfo = currDoc.data();
      const currUserInfo = await userClass.userInfoGet(currInfo.userId);
      currInfo["user"] = currUserInfo;
      currInfo["campaignId"] = currDoc.id;
      activeCampaignsObject.push(currInfo);
    });

    return activeCampaignsObject;
  } catch (error) {
    throw new Error(error);
  }
}

class CampaignClass {
  static async getHomeCardInfo(userId) {
    try {
      //Active campaigns que no sean del usuario
      const activeCampaignsQuery = Firestore.query(
        Firestore.collection(db, "campaigns"),
        where("isActive", "==", true),
        where("userId", "!=", userId)
      );
      const activeCampaignsQuerySnap = await Firestore.getDocs(
        activeCampaignsQuery
      );
      const activeCampaignsObject = await completeCampaignInfo(
        activeCampaignsQuerySnap
      );

      //Campaign del usuario
      const userCampaignQuery = Firestore.query(
        Firestore.collection(db, "campaigns"),
        where("isActive", "==", true),
        where("userId", "==", userId)
      );
      const userCampaignQuerySnap = await Firestore.getDocs(userCampaignQuery);
      const userCampaignObject = await completeCampaignInfo(
        userCampaignQuerySnap
      );

      //Donaciones pendientes
      const pendingDonationsQuery = Firestore.query(
        Firestore.collection(db, "donations"),
        where("userId", "==", userId),
        where("estado", "==", "pendiente")
      );
      const pendingDonationsQuerySnap = await Firestore.getDocs(
        pendingDonationsQuery
      );
      const pendingDonationsObject = pendingDonationsQuerySnap.docs.map((doc) =>
        doc.data()
      );

      //Donaciones completadas
      const completedDonationQuery = Firestore.query(
        Firestore.collection(db, "donations"),
        where("userId", "==", userId),
        where("estado", "==", "completado")
      );
      const completedDonationQuerySnap = await Firestore.getDocs(
        completedDonationQuery
      );
      const completedDonationsObject = completedDonationQuerySnap.docs.map(
        (doc) => doc.data()
      );

      //Formateamos la info para que Emilio sea feliz
      const formatedInfo = {};
      if (userCampaignObject.length > 0) {
        formatedInfo[userCampaignObject[0].campaignId] = userCampaignObject[0];
        formatedInfo[userCampaignObject[0].campaignId]["status"] =
          "Campaña activa";
        formatedInfo[userCampaignObject[0].campaignId]["fechaInicio"] =
          Firestore.Timestamp.fromDate(
            new Date(
              formatedInfo[userCampaignObject[0].campaignId].fechaInicio
                .seconds *
                1000 +
                formatedInfo[userCampaignObject[0].campaignId].fechaInicio
                  .nanoseconds /
                  1000000
            )
          ).toDate();
        formatedInfo[userCampaignObject[0].campaignId]["fechaExpiracion"] =
          Firestore.Timestamp.fromDate(
            new Date(
              formatedInfo[userCampaignObject[0].campaignId].fechaExpiracion
                .seconds *
                1000 +
                formatedInfo[userCampaignObject[0].campaignId].fechaExpiracion
                  .nanoseconds /
                  1000000
            )
          ).toDate();
      }

      for (const currentCamp of activeCampaignsObject) {
        formatedInfo[currentCamp.campaignId] = currentCamp;
        formatedInfo[currentCamp.campaignId]["status"] = "";
        formatedInfo[currentCamp.campaignId]["fechaInicio"] =
          Firestore.Timestamp.fromDate(
            new Date(
              currentCamp.fechaInicio.seconds * 1000 +
                currentCamp.fechaInicio.nanoseconds / 1000000
            )
          ).toDate();
        formatedInfo[currentCamp.campaignId]["fechaExpiracion"] =
          Firestore.Timestamp.fromDate(
            new Date(
              currentCamp.fechaExpiracion.seconds * 1000 +
                currentCamp.fechaExpiracion.nanoseconds / 1000000
            )
          ).toDate();
      }

      for (const pendingDonation of pendingDonationsObject) {
        if (formatedInfo.hasOwnProperty(pendingDonation.campaignId)) {
          formatedInfo[pendingDonation.campaignId]["status"] =
            "Donativo pendiente";
        }
      }

      for (const completedDonation of completedDonationsObject) {
        if (formatedInfo.hasOwnProperty(completedDonation.campaignId)) {
          formatedInfo[completedDonation.campaignId]["status"] =
            "Donativo completado";
        }
      }

      const res = [];
      
      for (const i in formatedInfo) {
        if(formatedInfo[i].status=='Campaña activa'){
          res.push(formatedInfo[i])
        }
      }
      for (const i in formatedInfo) {
        if(formatedInfo[i].status=='Donativo pendiente'){
          res.push(formatedInfo[i])
        }
      }
      for (const i in formatedInfo) {
        if(formatedInfo[i].status=='Donativo completado'){
          res.push(formatedInfo[i])
        }
      }
      for (const i in formatedInfo) {
        if(formatedInfo[i].status==''){
          res.push(formatedInfo[i])
        }
      }

      return res;
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
  static async getCampaignInfo(campaignId) {
    try {
      const campaignDocumentRef = doc(db, "campaigns", campaignId);
      const campaignDocument = await getDoc(campaignDocumentRef);
      const campaignData = campaignDocument.data();
      const userData = await userClass.userInfoGet(campaignData.userId);
      campaignData["user"] = userData;
      return campaignData;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CampaignClass;
