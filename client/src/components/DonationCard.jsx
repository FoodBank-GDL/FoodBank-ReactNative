import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import IconMCI from "react-native-vector-icons/MaterialCommunityIcons"
import IconMI from "react-native-vector-icons/MaterialIcons"

const DonationCard = ({ name, status }) => {
    return (
        <View style={Styles.card}>
            <View style={Styles.cardContent}>
                <IconMCI
                    name="checkbox-blank-circle"
                    size={17}
                    color={status === "pending" ? "#FE4C4C" : "#8BE794"}
                />
                <Text style={Styles.name}>{name}</Text>
            </View>
            <IconMI
                name="arrow-forward-ios"
                size={17}
                color={"black"}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    card: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
        width: 150,
        justifyContent: "space-between"
    },
    name: {
        fontWeight: "500"
    }
})

export default DonationCard