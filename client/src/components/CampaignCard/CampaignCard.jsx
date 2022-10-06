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

import IconFA from 'react-native-vector-icons/FontAwesome'
import IconAnt from 'react-native-vector-icons/AntDesign'


const CapmpaignCard = (props) => {

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>ITESM Invierno 2022</Text>

            <View>
                <View style={Styles.content}>
                    <IconFA
                        name="user"
                        size={15}
                        style={Styles.icon}
                    />

                    <Text style={Styles.contentText}>Cristian Cazares</Text>

                </View>
                <View style={Styles.content}>
                    <IconAnt
                        name="clockcircleo"
                        size={15}
                        style={Styles.icon}
                    />

                    <Text style={Styles.contentText}>Cristian Cazares</Text>

                </View>

            </View>

        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        height: 160,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        borderRadius: 5,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10
    },
    icon: {
        color: "#FF9900"
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 15
    },
    contentText: {
        fontSize: 11,
        paddingLeft: 10
    }
})

export default CapmpaignCard;
