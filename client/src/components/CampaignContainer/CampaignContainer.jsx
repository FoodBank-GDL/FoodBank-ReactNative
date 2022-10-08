import {
    Alert,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TextInputBase,
    View,
} from "react-native";
import StatusBar from "../StatusBar";
import { useEffect, useState } from "react";

import CapmpaignCard from "../CampaignCard/CampaignCard";

const CampaignContainer = (props) => {

    const renderItem = ({ item }) => (
        <CapmpaignCard
            title={item.title}
            name={item.name}
            startDate={item.startDate}
            finishDate={item.finishDate}
            progress={item.progress}
        />
    )

    return (
        <View style={Styles.container}>
            <FlatList
                data={[
                    {
                        title: "ITESM Invierno 2022",
                        name: "Cristian Cazares",
                        startDate: "23 de septiembre",
                        finishDate: "25 de septiembre",
                        progress: "80"
                    },
                    {
                        title: "ITESO Invierno 2022",
                        name: "Santiago Reyes",
                        startDate: "27 de septiembre",
                        finishDate: "28 de septiembre",
                        progress: "69"
                    },
                    {
                        title: "UdG Apple Campaña",
                        name: "Gael Rodriguez",
                        startDate: "23 de septiembre",
                        finishDate: "25 de septiembre",
                        progress: "42"
                    },
                    {
                        title: "UP Donaciones",
                        name: "Gael Rodriguez",
                        startDate: "23 de septiembre",
                        finishDate: "25 de septiembre",
                        progress: "55"
                    },
                    {
                        title: "Alimentos",
                        name: "Gael Rodriguez",
                        startDate: "23 de septiembre",
                        finishDate: "25 de septiembre",
                        progress: "66"
                    }]}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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

export default CampaignContainer;
