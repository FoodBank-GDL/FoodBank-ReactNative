import React, { useState, useEffect } from "react";
import {
    View,
    ScrollView,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet
} from "react-native";

import { IconFA, IconI, IconMCI, IconMI } from "../../lib/icons";
import Button from "./Button";

const ProfileComponent = ({ data }) => {
    //   const [data, setData] = useState({
    //     telefono: "",
    //     ubicacion: "",
    //   });

    const [edit, setEdit] = useState(false);

    const saveChanges = () => {
        setEdit(false)
    }

    const handleClickEditData = () => {
        setEdit((prev) => !prev)
    }

    const phoneDisplay = <Text style={Styles.detailDisplayText}>{data.telefono}</Text>
    const phoneInput = <TextInput style={Styles.detailDisplayText}>{data.telefono}</TextInput>

    const locationDisplay = <Text style={Styles.detailDisplayText}>{data.ubicacion != "" ?
        <Text style={Styles.detailDisplayText}>{data.ubicacion}</Text> :
        <Text style={{
            color: "#BABABA", width: "78%"
        }}>Escribe aqui</Text>}</Text>
    const locationInput = <TextInput style={Styles.detailDisplayText}>{data.ubicacion != "" &&
        <Text style={Styles.detailDisplayText}>{data.ubicacion}</Text>}</TextInput>

    return (
        <ScrollView>
            <View style={Styles.container}>

                <View style={Styles.userHeader}>

                    <IconFA name="user-circle-o" color="orange" size={190} />

                    <Text style={Styles.userName}>{data.nombre}</Text>

                    <View style={Styles.line}></View>

                </View>

                <View style={Styles.userDetailsContainer}>

                    <View style={Styles.detailDisplay}>
                        <View style={Styles.verticalLine}>
                            <IconMCI
                                name="email"
                                size={31}
                                color={"#FF9900"}
                            />
                        </View>
                        <Text style={Styles.detailDisplayText}>{data.email}</Text>
                    </View>

                    <View style={Styles.detailDisplay}>
                        <View style={Styles.verticalLine}>
                            <IconFA
                                name="phone"
                                size={30}
                                color={"#FF9900"}
                            />
                        </View>
                        <View style={{ width: "100%", flexDirection: "row" }}>

                            {edit ? phoneInput : phoneDisplay}

                            {!edit &&
                                <TouchableOpacity onPress={handleClickEditData}>
                                    <IconMI name="edit" style={Styles.editIcon} />
                                </TouchableOpacity>
                            }

                        </View>

                    </View>

                    <View style={Styles.detailDisplay}>
                        <View style={Styles.verticalLine}>
                            <IconMI
                                name="location-on"
                                size={32}
                                color={"#FF9900"}
                            />
                        </View>

                        <View style={{ width: "100%", flexDirection: "row" }}>
                            {edit ? locationInput : locationDisplay}

                            {!edit &&
                                <TouchableOpacity onPress={handleClickEditData}>
                                    <IconMI name="edit" style={Styles.editIcon} />
                                </TouchableOpacity>
                            }

                        </View>
                    </View>

                    {
                        edit &&
                        <Button text={"Guardar cambios"} handlePress={saveChanges} />
                    }


                </View>

            </View>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: "white",
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
    userHeader: {
        alignItems: "center",
        marginTop: 15
    },
    userName: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 15
    },
    line: {
        borderBottomWidth: 2,
        borderColor: "orange",
        height: 20,
        width: "100 %"
    },
    userDetailsContainer: {
        marginTop: 50
    },
    detailDisplay: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "#BABABA",
        borderRadius: 5,
        marginBottom: 20
    },
    detailDisplayText: {
        fontSize: 14,
        width: "78%"
    },
    verticalLine: {
        borderRightWidth: 1.5,
        height: 30,
        width: 40,
        borderColor: "#BABABA",
        marginRight: 15
    },
    editIcon: {
        size: 25,
        color: "#BABABA",
        fontSize: 20,

    }
});

export default ProfileComponent;
