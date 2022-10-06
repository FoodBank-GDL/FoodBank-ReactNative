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
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'

import ProgressBar from "../ProgressBar/ProgressBar";

const CapmpaignCard = (props) => {

    return (
        <View style={Styles.container}>

            <View style={Styles.categories}>
                <IconMCI
                    name="food-apple"
                    size={15}
                    color="gray"
                    style={Styles.category}
                />
                <IconFA5
                    name="tshirt"
                    size={15}
                    color="#71D1FB"
                    style={Styles.category}
                />
                <IconMCI
                    name="bottle-soda-classic"
                    size={15}
                    color="gray"
                    style={Styles.category}
                />
                <IconFA5
                    name="shopping-basket"
                    size={15}
                    color="#FC8181"
                    style={Styles.category}
                />
            </View>

            <Text style={Styles.title}>ITESM Invierno 2022</Text>

            <View>
                <View style={Styles.content}>
                    <IconFA
                        name="user"
                        size={15}
                        style={Styles.icon}
                    />

                    <Text style={Styles.contentText}>{"Cristian Cazares"}</Text>

                </View>
                <View style={Styles.content}>
                    <IconAnt
                        name="clockcircleo"
                        size={15}
                        style={Styles.icon}
                    />

                    <Text style={Styles.contentText}>{"24 de agosto - 25 de septiembre"}</Text>

                </View>

            </View>

            <ProgressBar
                percentage={'80%'}
                height={10}
                backgroundColor={'#D9D9D9'}
                completedColor={'#8BE794'}
            />

        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        height: 170,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        borderRadius: 15,
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
    },
    categories: {
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        top: 5
    },
    category: {
        marginLeft: 7
    }
})

export default CapmpaignCard;
