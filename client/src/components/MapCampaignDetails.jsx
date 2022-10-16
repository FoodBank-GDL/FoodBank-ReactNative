import {
    Image,
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

import IconFA from "react-native-vector-icons/FontAwesome"
import IconI from "react-native-vector-icons/Ionicons"

const MapCampaignDetails = ({ title, leader, startDate, finishDate }) => {

    return (
        <View style={Styles.container}>

            <View style={Styles.header}><Text style={Styles.title}>{title}</Text></View>

            <View style={Styles.detailsContainer}>
                <View style={Styles.detailsRow}>
                    <IconFA
                        name="user"
                        size={17}
                        color="orange"
                    />
                    <Text style={Styles.detailsText}>{leader}</Text>
                </View>

                <View style={Styles.detailsRow}>
                    <IconI
                        name="time-outline"
                        size={16}
                        color="orange"
                    />
                    <Text style={Styles.detailsText}>{startDate} - {finishDate}</Text>
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
        // position: "absolute",
        // top: 50,
        // left: 50,
        // borderWidth: 1,
        // borderColor: "black",
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
        marginLeft: 10,
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
