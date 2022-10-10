import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";

const DonationList = ({ donations }) => {

    const renderItem = ({ item }) => (
        <View style={Styles.item}>
            <Text style={Styles.donationText}>{item.producto}</Text>
            <Text style={Styles.donationText}>{`${item.cantidad} ${item.medida}`}</Text>
        </View>
    )

    return (
        <View style={Styles.container}>
            <FlatList
                data={donations}
                renderItem={renderItem}
                keyExtractor={item => item.producto}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingHorizontal: 30
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    donationText: {
        fontSize: 12,
    }
})

export default DonationList