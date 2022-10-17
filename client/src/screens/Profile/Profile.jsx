import React, { useState, useEffect } from "react";
import {
    View,
} from "react-native";
import { Styles } from "./Styles";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import ProfileContainer from "../../components/ProfileContainer";

const userId = "JhcZP5uKzORJ3x0aKPvNfXO0Qoi1";

const Profile = (props) => {


    return (
        <View style={Styles.container}>
            <Header title={"Perfil"} />
            <ProfileContainer userId={userId} />
            <NavBar />
        </View>
    )
};

export default Profile;
