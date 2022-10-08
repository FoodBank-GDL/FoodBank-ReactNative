import {
    FlatList,
    StyleSheet,
    View,
} from "react-native";

import CapmpaignCard from "../CampaignCard/CampaignCard";

const campaignExamples = [
    {
        status: "Campaña activa",
        campaignId: "1GBDTWWFVREi9EF92m",
        accesibilidad: "Publica",
        categoriaEnseres: true,
        categoriaFrutasVerduras: false,
        categoriaNoPerecederos: true,
        categoriaRopa: true,
        descripcion: "Esta es la descripcion de la de prueba",
        donativosTotales: 56,
        fechaExpiracion: "5 de octubre de 2022",
        fechaInicio: "2 de octubre de 2022",
        isActive: false,
        metaDonativos: 100,
        titulo: "Lider Campaign Example",
        ubicacion: "En mi casa",
        userId: "FO3D3dMS9QNYKcgkxnOYx2Tqsva2"
    },
    {
        status: "Donativo pendiente",
        campaignId: "1GBDTWWFV8XREi9EF92m",
        accesibilidad: "Publica",
        categoriaEnseres: true,
        categoriaFrutasVerduras: false,
        categoriaNoPerecederos: true,
        categoriaRopa: true,
        descripcion: "Esta es la descripcion de la de prueba",
        donativosTotales: 56,
        fechaExpiracion: "5 de octubre de 2022",
        fechaInicio: "2 de octubre de 2022",
        isActive: false,
        metaDonativos: 100,
        titulo: "Example User Campaign",
        ubicacion: "Tec de Monterrey",
        userId: "FO3D3dMS9QNYKcgkxnOYx2Tqsva2"
    },
    {
        status: "Donativo completado",
        campaignId: "V9CRVX7NvfFdRbASOoRe",
        accesibilidad: "Publica",
        categoriaEnseres: false,
        categoriaFrutasVerduras: true,
        categoriaNoPerecederos: false,
        categoriaRopa: true,
        descripcion: "Esta es la descripcion de la de prueba",
        donativosTotales: 10,
        fechaExpiracion: "5 de octubre de 2022",
        fechaInicio: "2 de octubre de 2022",
        isActive: false,
        metaDonativos: 100,
        titulo: "Example User Campaign 2",
        ubicacion: "ITESO",
        userId: "FO3D3dMS9QNYKcgkxnOYx2Tqsva2"
    },
    {

        status: "",
        campaignId: "V9CRVX7NvfFdRbASOoRewes",
        accesibilidad: "Publica",
        categoriaEnseres: false,
        categoriaFrutasVerduras: false,
        categoriaNoPerecederos: true,
        categoriaRopa: true,
        descripcion: "Esta es la descripcion de la de prueba",
        donativosTotales: 80,
        fechaExpiracion: "5 de octubre de 2022",
        fechaInicio: "2 de octubre de 2022",
        isActive: false,
        metaDonativos: 100,
        titulo: "Example User Campaign 3",
        ubicacion: "OXXO",
        userId: "FO3D3dMS9QNYKcgkxnOYx2Tqsva2"
    },
    {
        status: "",
        campaignId: "V9CRVXFdRbASOoRewes",
        accesibilidad: "Publica",
        categoriaEnseres: true,
        categoriaFrutasVerduras: false,
        categoriaNoPerecederos: false,
        categoriaRopa: true,
        descripcion: "Esta es la descripcion de la de prueba",
        donativosTotales: 65,
        fechaExpiracion: "5 de octubre de 2022",
        fechaInicio: "2 de octubre de 2022",
        isActive: false,
        metaDonativos: 100,
        titulo: "Example User Campaign 4",
        ubicacion: "En mi casa",
        userId: "FO3D3dMS9QNYKcgkxnOYx2Tqsva2"
    },
]


const CampaignContainer = (props) => {

    const renderItem = ({ item }) => (
        <CapmpaignCard
            status={item.status}
            title={item.titulo}
            user={item.userId}
            location={item.ubicacion}
            startDate={item.fechaInicio}
            finishDate={item.fechaExpiracion}
            progress={Math.round(item.donativosTotales * 100 / item.metaDonativos)}
            categoriaEnseres={item.categoriaEnseres}
            categoriaFrutasVerduras={item.categoriaFrutasVerduras}
            categoriaNoPerecederos={item.categoriaNoPerecederos}
            categoriaRopa={item.categoriaRopa}
        />
    )

    return (
        <View style={Styles.container}>

            <FlatList
                data={campaignExamples}
                renderItem={renderItem}
                keyExtractor={item => item.campaignId}
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: "white",
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
    }
})

export default CampaignContainer;
