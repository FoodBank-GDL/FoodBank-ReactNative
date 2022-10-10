import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

import IconMCI from "react-native-vector-icons/MaterialCommunityIcons"
import IconSLI from "react-native-vector-icons/SimpleLineIcons"

const DonationCard = ({ id, name, status, selected, handleSelection }) => {

    const selectCard = () => {
        if (id === selected) {
            handleSelection("")
        } else {
            handleSelection(id)
        }
    }

    return (
        <View style={selected === id ? Styles.containerExpanded : Styles.container}>
            <TouchableOpacity onPress={selectCard}>
                <View style={Styles.card}>
                    <View style={Styles.cardContent}>
                        <IconMCI
                            name="checkbox-blank-circle"
                            size={17}
                            color={status === "pendiente" ? "#FE4C4C" : "#8BE794"}
                        />
                        <Text style={Styles.name}>{name}</Text>
                    </View>
                    <View style={Styles.iconContainer}>
                        <IconSLI
                            name={selected === id ? "arrow-down" : "arrow-right"}
                            size={17}
                            color={"black"}
                        />
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: 50,
        alignContent: "center",
        borderBottomWidth: 1,
        justifyContent: "center"
    },
    containerExpanded: {
        height: 100,
        alignContent: "center",
        borderBottomWidth: 1,
        justifyContent: "center"
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    iconContainer: {
        width: 200,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    name: {
        fontWeight: "500",
        marginLeft: 10
    },
    reverseIcon: {
        transform: [
            { skewX: "90deg" },
        ],
    }
})

export default DonationCard