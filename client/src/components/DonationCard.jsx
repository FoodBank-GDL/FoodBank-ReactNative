import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

import IconMCI from "react-native-vector-icons/MaterialCommunityIcons"
import IconSLI from "react-native-vector-icons/SimpleLineIcons"
import DonationList from "./DonationList";

import axios from "axios";
import { API_URL } from "../../lib/constants";
import { Alert } from "react-native";

const DonationCard = ({ id, campaignId, name, status, selected, donations, handleSelection, setDonationErased }) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const [statusState, setStatusState] = useState(status)


    const selectCard = () => {
        if (id === selected) {
            handleSelection("")
        } else {
            handleSelection(id)
        }
    }

    const handleChangeStatus = () => {
        axios.put(`${API_URL}/donation/changeStatus`, {
            userId: id,
            campaignId: campaignId,
            newState: statusState === "pendiente" ? "completado" : "pendiente"
        })
            .then((res) => {
                setLoading(false);
                setStatusState(statusState === "pendiente" ? "completado" : "pendiente")
            })
            .catch((err) =>
                Alert.alert(
                    err.response.data
                )
            )
    }

    const handleEraseDonation = () => {
        axios.delete(`${API_URL}/donation/deleteDonation`, {
            data: {
                userId: id,
                campaignId: campaignId
            }
        })
            .then((res) => {
                setLoading(false);
                setDonationErased((prev) => !prev)
            })
            .catch((err) => {
                Alert.alert(
                    err.response.data
                )
            }
            )
    }

    return (
        <View style={selected === id ? Styles.containerExpanded : Styles.container}>
            <TouchableOpacity onPress={selectCard}>
                <View style={Styles.card}>
                    <View style={Styles.cardContent}>
                        <IconMCI
                            name="checkbox-blank-circle"
                            size={17}
                            color={statusState === "pendiente" ? "#FE4C4C" : "#8BE794"}
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

            {selected === id &&
                <DonationList donations={donations} status={statusState} handleChangeStatus={handleChangeStatus} handleEraseDonation={handleEraseDonation} />
            }

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
    }
})

export default DonationCard