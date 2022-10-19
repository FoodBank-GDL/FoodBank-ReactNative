import React, { useState, useEffect } from "react";
import {
    View,
} from "react-native";
import { Styles } from "./Styles";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import ProfileContainer from "../../components/ProfileContainer";
import { useAuth } from "../../contexts/AuthContext";

const Profile = (props) => {

    const { userId } = useAuth();

    return (
        <View style={Styles.container}>
            <Header title={"Perfil"} />
            <ProfileContainer userId={userId} />
        </View>
    )
}

export default Profile