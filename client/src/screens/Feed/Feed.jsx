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
import StatusBar from "../../components/StatusBar";
import { Styles } from "./Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useEffect, useState } from "react";

import Header from "../../components/Header";

const Feed = (props) => {

    return (
        <View style={Styles.container}>
            <Header />
            <View style={{ flex: 9 }}></View>
            <View style={{ flex: 1, backgroundColor: 'orange' }}></View>
        </View>
    );
};

export default Feed;
