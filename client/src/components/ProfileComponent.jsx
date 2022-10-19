import React, { useState, useEffect } from "react";
import {
    View,
    ScrollView,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
    Alert
} from "react-native";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext"

import { IconFA, IconI, IconMCI, IconMI } from "../../lib/icons";
import Button from "./Button";
import { API_URL } from "../../lib/constants";

const ProfileComponent = ({ data, handleEditedFields }) => {
    const { logout } = useAuth();
    const handleLogOut = () => {
        logout();
    };

    const [formData, setFormData] = useState({
        telefono: "",
        ubicacion: "",
    });

    const [edit, setEdit] = useState(false);

    const saveChanges = () => {
        handlePutChanges()
        setEdit(false)
    }

    const handlePutChanges = () => {
        let phonePut, locationPut;
        if (formData.telefono === "") {
            phonePut = data.telefono
        }
        else {
            phonePut = formData.telefono
        }
        if (formData.ubicacion === "") {
            locationPut = data.ubicacion
        }
        else {
            locationPut = formData.ubicacion
        }

        axios.put(`${API_URL}/user/updateUserInfo`, {
            userId: data.userId,
            email: data.email,
            telefono: phonePut,
            ubicacion: locationPut
        })
            .then((res) => {
                handleEditedFields()
            })
            .catch((err) => {
                Alert.alert(
                    err.response.data
                )
            }
            )
    }

    const handleTextChange = (field, val) => {
        setFormData({
            ...formData,
            [field]: val,
        });
    };

    const handleClickEditData = () => {
        setEdit((prev) => !prev)
    }

    const phoneDisplay = <Text style={Styles.detailDisplayText}>{data.telefono}</Text>
    const phoneInput = <TextInput keyboardType="phone-pad" style={Styles.detailEditText} onChangeText={(val) => handleTextChange("telefono", val)}>{data.telefono}</TextInput>

    const locationDisplay = <Text style={Styles.detailDisplayText}>{data.ubicacion != "" ?
        <Text style={Styles.detailDisplayText}>{data.ubicacion}</Text> :
        <Text style={{
            color: "#BABABA", width: "78%"
        }}>Escribe aqui</Text>}</Text>
    const locationInput = <TextInput style={Styles.detailEditText} onChangeText={(val) => handleTextChange("ubicacion", val)}>{data.ubicacion != "" &&
        <Text style={Styles.detailDisplayText}>{data.ubicacion}</Text>}</TextInput>

    return (
        <ScrollView>
            <View style={Styles.container}>

                <View style={Styles.userHeader}>

                    {!edit && <IconFA name="user-circle-o" color="orange" size={190} />}

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
                        <View style={{ width: 150, marginLeft: "auto", marginRight: "auto", marginBottom: 15 }}>
                            <Button text={"Guardar cambios"} handlePress={saveChanges} />
                        </View>
                    }


                </View>

            </View>
            <View style={{ width: 150, marginLeft: "auto", marginRight: "auto" }}>
                <Button text={"Cerrar sesión"} handlePress={() => handleLogOut()} />
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
        fontSize: '4rem',
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
    detailEditText: {
        fontSize: 14,
        width: "100%"
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
