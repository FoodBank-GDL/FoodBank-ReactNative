import {
    Alert,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TextInputBase,
    View,
} from "react-native";
import StatusBar from "../StatusBar";
import { useEffect, useState } from "react";

import CapmpaignCard from "../CampaignCard/CampaignCard";

const campaignExamples = [
    {
        campaignId: "1GBDTWWFV8XREi9EF92m",
        accesibilidad: "Publica",
        categoriaEnseres: false,
        categoriaFrutasVerduras: false,
        categoriaNoPerecederos: false,
        categoriaRopa: true,
        descripcion: "Esta es la descripcion de la de prueba",
        donativosTotales: 0,
        fechaExpiracion: "5 de octubre de 2022",
        fechaInicio: "2 de octubre de 2022",
        isActive: false,
        metaDonativos: 100,
        titulo: "Example User Campaign",
        ubicacion: "En mi casa",
        userId: "FO3D3dMS9QNYKcgkxnOYx2Tqsva2"
    },
    {
        campaignId: "V9CRVX7NvfFdRbASOoRe",
        accesibilidad: "Publica",
        categoriaEnseres: false,
        categoriaFrutasVerduras: false,
        categoriaNoPerecederos: false,
        categoriaRopa: true,
        descripcion: "Esta es la descripcion de la de prueba",
        donativosTotales: 0,
        fechaExpiracion: "5 de octubre de 2022",
        fechaInicio: "2 de octubre de 2022",
        isActive: false,
        metaDonativos: 100,
        titulo: "Example User Campaign",
        ubicacion: "En mi casa",
        userId: "FO3D3dMS9QNYKcgkxnOYx2Tqsva2"
    }
]


const CampaignContainer = (props) => {

    const renderItem = ({ item }) => (
        <CapmpaignCard
            title={item.titulo}
            name={item.userId}
            startDate={item.fechaInicio}
            finishDate={item.fechaExpiracion}
            progress={Math.round(item.donativosTotales * 100 / item.metaDonativos)}
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
