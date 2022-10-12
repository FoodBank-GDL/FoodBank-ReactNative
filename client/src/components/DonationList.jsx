import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";

import IconF from "react-native-vector-icons/Fontisto"
import IconFA from "react-native-vector-icons/FontAwesome"

const DonationList = ({ donations, status, handleChangeStatus, handleEraseDonation }) => {

    const renderItem = ({ item }) => (
        <View style={Styles.item}>
            <Text style={Styles.donationText}>{item.producto}</Text>
            <Text style={Styles.donationText}>{`${item.cantidad} ${item.medida}`}</Text>
        </View>
    )

    return (
        <View style={Styles.container}>
            <View style={Styles.donationsContainer}>
                <FlatList
                    data={donations}
                    renderItem={renderItem}
                    keyExtractor={item => item.producto}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View style={Styles.bottomBar}>
                <TouchableOpacity onPress={handleChangeStatus}
                >
                    <View style={Styles.completed}>
                        {status === "pendiente" ?
                            <IconF
                                name="checkbox-passive"
                                style={Styles.checkbox}
                            /> :
                            <IconF
                                name="checkbox-active"
                                style={Styles.checkbox}
                            />
                        }

                        <Text style={{ fontSize: 15 }}>Completado</Text>
                    </View>
                </TouchableOpacity>

                <IconFA
                    name="trash"
                    style={Styles.checkbox}
                    onPress={handleEraseDonation}
                />

            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    donationsContainer: {
        paddingHorizontal: 30
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    donationText: {
        fontSize: 12,
    },
    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    completed: {
        flexDirection: "row",
        alignItems: "center",
        width: 110,
        justifyContent: "space-between",
        marginVertical: 15,
    },
    checkbox: {
        color: "orange",
        fontSize: 21
    }
})

export default DonationList