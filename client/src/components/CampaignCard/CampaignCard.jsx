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

const CapmpaignCard = ({ status, title, name, startDate, finishDate, progress,
    categoriaEnseres,
    categoriaFrutasVerduras,
    categoriaNoPerecederos,
    categoriaRopa
}) => {

    return (
        <View style={status != "" ? Styles.containerDonativo : Styles.container}>

            {/* {donativo} */}

            <View style={Styles.categories}>
                <IconMCI
                    name="food-apple"
                    size={15}
                    color={categoriaFrutasVerduras ? "#50BE1C" : "gray"}
                    style={Styles.category}
                />
                <IconFA5
                    name="tshirt"
                    size={15}
                    color={categoriaRopa ? "#71D1FB" : "gray"}
                    style={Styles.category}
                />
                <IconMCI
                    name="bottle-soda-classic"
                    size={15}
                    color={categoriaNoPerecederos ? "#FFE86D" : "gray"}
                    style={Styles.category}
                />
                <IconFA5
                    name="shopping-basket"
                    size={15}
                    color={categoriaEnseres ? "#FC8181" : "gray"}
                    style={Styles.category}
                />
            </View>

            <Text style={Styles.title}>{title}</Text>

            <View>
                <View style={Styles.content}>
                    <IconFA
                        name="user"
                        size={15}
                        style={Styles.icon}
                    />

                    <Text style={Styles.contentText}>{name}</Text>

                </View>
                <View style={Styles.content}>
                    <IconAnt
                        name="clockcircleo"
                        size={15}
                        style={Styles.icon}
                    />

                    <Text style={Styles.contentText}>{`${startDate} - ${finishDate}`}</Text>

                </View>

            </View>

            <ProgressBar
                percentage={`${progress}%`}
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
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderColor: "#FAFAFA",
        borderWidth: 3,
        borderRadius: 15,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12
    },
    containerDonativo: {
        height: 170,
        backgroundColor: "#EDF6FF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderColor: "#FAFAFA",
        borderWidth: 3,
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
        height: 50,
    },
    icon: {
        color: "#FF9900"
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10
    },
    contentText: {
        fontSize: 11,
        paddingLeft: 10
    },
    categories: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 0,
    },
    category: {
        marginLeft: 7
    }
})

export default CapmpaignCard;
