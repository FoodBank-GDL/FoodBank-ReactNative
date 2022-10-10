import {
    FlatList,
    StyleSheet,
    View,
    Text,
    Alert
} from "react-native";
import { useEffect, useState } from "react";
import CampaignsComponent from "../CampaignsComponent/CampaignsComponent";

import axios from "axios";
import { API_URL } from "../../../lib/constants";

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

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState()

    const getCampaigns = async () => {
        axios.get(`${API_URL}/campaign/homeCards/NtrDFe1Plo7lzr3mIMOq`).then((res) => {
            setLoading(false);

            console.log(res.data)

            setData(res.data)


        })
            .catch((err) => {
                setLoading(false);
                setError(err.response.data)
                console.log(err.response.data)

                Alert.alert(
                    err.response.data
                );
            });
    }

    useEffect(() => {

        getCampaigns()

    }, [])

    if (loading || error) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <CampaignsComponent
            campaigns={data}
        />
    );
};

export default CampaignContainer;
