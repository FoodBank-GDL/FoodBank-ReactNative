import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Styles } from "./Styles";
import axios from "axios";

import Header from "../../components/Header";
import { IconFA, IconI, IconMCI, IconMI } from "../../../lib/icons";
import { Button } from "../../components";
import { API_URL } from "../../../lib/constants";
import Loading from "../../components/Loading/Loading";

const userId = "JhcZP5uKzORJ3x0aKPvNfXO0Qoi1"

const ProfileDetails = (props) => {
  const [data, setData] = useState({
    telefono: "",
    ubicacion: "",
  });

  const [getData, setGetData] = useState();
  const [focusTel, setFocusTel] = useState(false);
  const [focusLoc, setFocusLoc] = useState(false);
  const [editTel, setEditTel] = useState(false);
  const [editLoc, setEditLoc] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUser = async () => {
    setLoading(true);

    axios
      .get(`${API_URL}/user/info/${userId}`)
      .then((res) => {
        console.log("si")
        setGetData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.getData);
        Alert.alert(err.response.getData);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleTextChange = (field, val) => {
    setData({
      ...data,
      [field]: val,
    });
  };

  // useEffect(() => {
  //   if (
  //     editTel != false &&
  //     editLoc != false
  //   ) {
  //     setButtonDisabled(false);
  //   } else {
  //     setButtonDisabled(true);
  //   }
  // }, [data]);

  const saveChanges = () => {

    setLoading(true);
    setLoading(false);

    // await axios
    //   .post(`${API_URL}/campaign/create`, {
    //     userId: "JhcZP5uKzORJ3x0aKPvNfXO0Qoi1",
    //     titulo: campData.titulo,
    //     descripcion: campData.descripcion,
    //     accesibilidad: campData.accesibilidad,
    //     fechaInicio: campData.fechaInicio,
    //     fechaExpiracion: campData.fechaExpiracion,
    //     ubicacion: campData.ubicacion,
    //     donativosTotales: 0,
    //     metaDonativos: campData.metaDonativos,
    //     isActive: true,
    //     categoriaFrutasVerduras: campData.categoriaFrutasVerduras,
    //     categoriaRopa: campData.categoriaRopa,
    //     categoriaNoPerecederos: campData.categoriaNoPerecederos,
    //     categoriaEnseres: campData.categoriaEnseres,
    //   })
    //   .then((res) => {
    //     Alert.alert("Campaña creada exitosamente");

    //     setLoading(false);
    //     navigation.navigate("Feed");
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     Alert.alert(
    //       "Lo sentimos. No pudimos crear la campaña.",
    //       err.response.data
    //     );
    //   });
  };

  if (editLoc || editTel) {     // TODO Una sola variable
    location = (
      <View style={Styles.inputContainer}>
        <IconMI
          name="location-on"
          size={32}
          color={"#FF9900"}
          style={Styles.iconLeft}
        />
        <View style={Styles.verticalLine}></View>
        <TextInput
          onChangeText={(val) => handleTextChange("ubicacion", val)}
          value={data.ubicacion}
          placeholder="Escribe aquí"
          onFocus={() => setFocusLoc(true)}
          onBlur={() => setFocusLoc(false)}
          style={focusLoc ? Styles.inputFocused : Styles.input}
        />
      </View>
    );
  }

  if (editTel || editLoc) {     // TODO Una sola variablke
    phone = (
      <View style={Styles.inputContainer}>
        <IconFA name="phone" size={30} color={"#FF9900"} style={Styles.phone} />
        <View style={Styles.verticalLine}></View>
        <TextInput
          onChangeText={(val) => handleTextChange("telefono", val)}
          value={data.telefono}
          placeholder="Escribe aquí"
          onFocus={() => setFocusTel(true)}
          onBlur={() => setFocusTel(false)}
          style={focusTel ? Styles.inputFocused : Styles.input}
        />
      </View>
    );
  }

  if (loading || error) {

    return <Loading />

  } else {


    // TODO change making two different variables (phoneDisplay, phoneInput) and changing the variable not re defining it

    let phone = (
      <View style={Styles.mailContainer}>
        <IconFA
          name="phone"
          size={30}
          color={"#FF9900"}
          style={Styles.iconLeft}
        />
        <View style={Styles.verticalLine}></View>
        <Text style={{ fontSize: 19 }}>{getData.telefono}</Text>
        <TouchableOpacity
          onPress={() => setEditTel(true)}
          style={Styles.iconRight}
        >
          <IconMI name="edit" size={25} color={"#FF9900"} />
        </TouchableOpacity>
      </View>
    );

    let location = (
      <View style={Styles.mailContainer}>
        <IconMI
          name="location-on"
          size={32}
          color={"#FF9900"}
          style={Styles.iconLeft}
        />
        <View style={Styles.verticalLine}></View>
        <Text style={{ fontSize: 19 }}>{getData.ubicacion === "" ? "Ubicación" : getData.ubicacion}</Text>
        <TouchableOpacity
          onPress={() => setEditLoc(true)}
          style={Styles.iconRight}
        >
          <IconMI name="edit" size={25} color={"#FF9900"} />
        </TouchableOpacity>
      </View>
    );


    return (
      <ScrollView style={Styles.container}>
        <Header title={"Perfil"} />
        <View style={Styles.content}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconI name="person-circle-outline" size={300} color={"#FF9900"} />
            <Text style={Styles.name}>{getData.name}</Text>
            <View style={Styles.horizontalLine}></View>
          </View>
          <View style={Styles.mailContainer}>
            <IconMCI
              name="email"
              size={31}
              color={"#FF9900"}
              style={Styles.iconLeft}
            />
            <View style={Styles.verticalLine}></View>
            <Text style={{ fontSize: 19 }}>Hello</Text>
          </View>
          {phone}
          {location}
          <View style={{ height: 50 }}></View>
          <Button
            handlePress={() => saveChanges()}
            disabled={buttonDisabled}
            text={
              loading === false ? (
                "Guardar"
              ) : (
                <ActivityIndicator color="white" size={30} />
              )
            }
          />
        </View>
      </ScrollView>
    );
  }
};

export default ProfileDetails;
