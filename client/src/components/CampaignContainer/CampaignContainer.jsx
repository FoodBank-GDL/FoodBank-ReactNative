import {
    Alert,
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

    return (
        <View style={Styles.container}>
            <CapmpaignCard />
            <CapmpaignCard />
            <CapmpaignCard />
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: "white",
        padding: 20,

    }
})

export default CampaignContainer;
