import {
    FlatList,
    StyleSheet,
    View,
} from "react-native";

import CapmpaignCard from "../CampaignCard/CampaignCard";

const CampaignsComponent = ({ campaigns }) => {

    const renderItem = ({ item }) => (
        <CapmpaignCard
            status={item.status}
            title={item.titulo}
            user={item.user.nombre}
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
                data={campaigns}
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

export default CampaignsComponent;
