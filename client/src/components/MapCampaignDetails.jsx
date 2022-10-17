import {
    Image,
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

import IconFA from "react-native-vector-icons/FontAwesome"
import IconI from "react-native-vector-icons/Ionicons"

import { parseDateYYYYMMDD_NoYear } from "../../lib/parseDate";

const MapCampaignDetails = ({ status,
    title,
    user,
    location,
    startDate,
    finishDate,
    progress,
    donativosTotales,
    metaDonativos,
    categoriaEnseres,
    categoriaFrutasVerduras,
    categoriaNoPerecederos,
    categoriaRopa,
    accessibility,
    description,
    navigation }) => {

    return (
        <View style={Styles.container}>

            <View style={Styles.header}><Text style={Styles.title}>{title}</Text></View>

            <View style={Styles.detailsContainer}>
                <View style={Styles.detailsRow}>
                    <View style={{ width: 20 }}>
                        <IconFA
                            name="user"
                            size={17}
                            color="orange"
                        />
                    </View>
                    <Text style={Styles.detailsText}>{user}</Text>
                </View>

                <View style={Styles.detailsRow}>
                    <View style={{ width: 20 }}>

                        <IconI
                            name="time-outline"
                            size={16}
                            color="orange"
                        />
                    </View>
                    <Text style={Styles.detailsText}>{parseDateYYYYMMDD_NoYear(startDate)} - {parseDateYYYYMMDD_NoYear(finishDate)}</Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => { }}
                style={Styles.detailsButton}
            >
                <Text style={Styles.buttonText}>Detalles</Text>
            </TouchableOpacity>

        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#F8F8F8",
        width: 230,
        height: 150,
        borderRadius: 10,
    },
    header: {
        padding: 10,
        marginHorizontal: 5,
        borderBottomColor: "#E7E7E7",
        borderBottomWidth: 1
    },
    title: {
        textAlign: "center",
        fontWeight: "bold"
    },
    detailsContainer: {
        justifyContent: "space-around",
        margin: 10,
        marginHorizontal: 15
    },
    detailsRow: {
        flexDirection: "row",
        marginBottom: 7
    },
    detailsText: {
        fontSize: 11,
    },
    detailsButton: {
        backgroundColor: "orange",
        width: 70,
        padding: 5,
        borderRadius: 10,
        marginRight: "auto",
        marginLeft: "auto",
    },
    buttonText: {
        fontSize: 12,
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
    }
})

export default MapCampaignDetails;
