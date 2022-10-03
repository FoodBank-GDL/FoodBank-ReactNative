const { where, getDoc } = require('firebase/firestore');
const {Firestore, db } = require('../utils/firebase_config');
async function updateDocuments(userId) {
    try {
        const myQuery=Firestore.query(Firestore.collection(db,"campaigns"), where('userId','==',userId), where('isActive','==',true));
        const querySnap=await Firestore.getDocs(myQuery);
        querySnap.forEach((currDoc)=>{
            Firestore.updateDoc(currDoc.ref, {isActive:false});
        });


    } catch (error) {
        throw new Error(error);
    }
}

class UserClass {

    static async createCampaign(body){
        try{
            await updateDocuments(body.userId);
            const reFireStore= await Firestore.addDoc(Firestore.collection(db,"campaigns"),{
                userId:body.userId,
                titulo:body.titulo,
                descripcion:body.descripcion,
                accesibilidad:body.accesibilidad,
                fechaInicio:Firestore.Timestamp.fromDate(new Date(body.fechaInicio)),
                fechaExpiracion:Firestore.Timestamp.fromDate(new Date(body.fechaExpiracion)),
                ubicacion:body.ubicacion,
                donativosTotales:0,
                metaDonativos:body.metaDonativos,
                isActive:true,
                categoriaFrutasVerduras:body.categoriaFrutasVerduras,
                categoriaRopa:body.categoriaRopa,
                categoriaNoPerecederos:body.categoriaNoPerecederos,
                categoriaEnseres:body.categoriaEnseres
                
            }).catch((error)=>{
                return { "message": error.code, "status": "error" };
            });
            return reFireStore;
        }catch(error){
            throw new Error(error);
        }
    }

}

module.exports = UserClass;