import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import IconMCI from "react-native-vector-icons/MaterialCommunityIcons"

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
        </View>
    )
}

const Styles = StyleSheet.create({
    card: {
        height: 40,
        flexDirection: "row",
        alignItems: "center"
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