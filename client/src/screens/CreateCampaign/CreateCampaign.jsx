import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Button from "../../components/Button";
import IconMI from "react-native-vector-icons/MaterialIcons";
import Category from "../../components/Category";
import DatePicker from "../../components/DatePicker";
import axios from "axios";
import { API_URL } from "../../../lib/constants";
import { Styles } from "./Styles";
import { useAuth } from "../../contexts/AuthContext";

const CreateCampaign = ({ navigation }) => {
  let valTitle = true;
  const { userId } = useAuth();
  const [focusTitle, setFocusTitle] = useState(false);
  const [focusMeta, setFocusMeta] = useState(false);
  const [focusLoc, setFocusLoc] = useState(false);
  const [focusDesc, setFocusDesc] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [privateSelected, setPrivateSelected] = useState(false);
  const [loading, setLoading] = useState(false);

  const [campData, setCampData] = useState({
    titulo: "",
    descripcion: "",
    accesibilidad: "Publica",
    fechaInicio: "",
    fechaExpiracion: "",
    ubicacion: "",
    metaDonativos: "",
    categoriaFrutasVerduras: false,
    categoriaRopa: false,
    categoriaNoPerecederos: false,
    categoriaEnseres: false,
  });

  const [dateStart, setDateStart] = useState({
    dia: "",
    mes: "",
    hora: "",
    minuto: "",
  });

  const [dateEnd, setDateEnd] = useState({
    dia: "",
    mes: "",
    hora: "",
    minuto: "",
  });

  useEffect(() => {
    if (
      campData.titulo !== "" &&
      dateStart.dia !== "" &&
      dateStart.mes !== "" &&
      dateEnd.dia !== "" &&
      dateEnd.mes !== "" &&
      campData.metaDonativos !== "" &&
      campData.ubicacion !== "" &&
      campData.descripcion !== ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [campData]);

  const privateSelection = () => {
    if (privateSelected) {
      setPrivateSelected(!privateSelected);
      campData.accesibilidad = "Publica";
    } else if (campData.accesibilidad == "Publica") {
      setPrivateSelected(true);
      campData.accesibilidad = "Privada";
    }
  };

  const createCampaign = async () => {
    if (dateStart.dia <= 9)
      campData.fechaInicio =
        "0" + dateStart.dia + " " + dateStart.mes + " 2022";
    else campData.fechaInicio = dateStart.dia + " " + dateStart.mes + " 2022";
    if (dateEnd.dia <= 9)
      campData.fechaExpiracion =
        "0" + dateEnd.dia + " " + dateEnd.mes + " 2022";
    else campData.fechaExpiracion = dateEnd.dia + " " + dateEnd.mes + " 2022";

    setLoading(true);

    await axios
      .post(`${API_URL}/campaign/create`, {
        userId: userId,
        titulo: campData.titulo,
        descripcion: campData.descripcion,
        accesibilidad: campData.accesibilidad,
        fechaInicio: campData.fechaInicio,
        fechaExpiracion: campData.fechaExpiracion,
        ubicacion: campData.ubicacion,
        donativosTotales: 0,
        metaDonativos: campData.metaDonativos,
        isActive: true,
        categoriaFrutasVerduras: campData.categoriaFrutasVerduras,
        categoriaRopa: campData.categoriaRopa,
        categoriaNoPerecederos: campData.categoriaNoPerecederos,
        categoriaEnseres: campData.categoriaEnseres,
      })
      .then((res) => {
        Alert.alert("Campaña creada exitosamente");

        setLoading(false);
        navigation.navigate("Feed");
      })
      .catch((err) => {
        setLoading(false);
        Alert.alert(
          "Lo sentimos. No pudimos crear la campaña.",
          err.response.data
        );
      });
  };

  const handleTextChange = (field, val) => {
    if (field == "titulo" && val.length > 25) {
      Alert.alert(
        "¡Título muy largo!",
        "Favor de ingresar un título de máximo 25 caracteres"
      );
      valTitle = false;
    }
    if (valTitle) {
      setCampData({
        ...campData,
        [field]: val,
      });
    }
  };

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.content}>
        <View style={Styles.field}>
          <Text style={Styles.titulo}>Título</Text>
          <TextInput
            onChangeText={(val) => handleTextChange("titulo", val)}
            value={campData.titulo}
            placeholder="Escribe aquí"
            onFocus={() => setFocusTitle(true)}
            onBlur={() => setFocusTitle(false)}
            style={focusTitle ? Styles.inputTitleFocused : Styles.inputTitle}
          />
        </View>
        <View style={Styles.field}>
          <Text style={Styles.titulo}>Categoría</Text>
          <Text style={Styles.subtitle}>Selecciona una o más</Text>
          <View style={Styles.row}>
            <Category
              color="#50BE1C"
              footer="Frutas y verduras"
              data={campData}
              show={true}
              isButton={true}
            />
            <Category
              color="#71D1FB"
              footer="Ropa"
              data={campData}
              show={true}
              isButton={true}
            />
            <Category
              color="#FFE86D"
              footer="No perecederos"
              data={campData}
              show={true}
              isButton={true}
            />
            <Category
              color="#FC8181"
              footer="Enseres"
              data={campData}
              show={true}
              isButton={true}
            />
          </View>
        </View>
        <View style={Styles.field}>
          <Text style={Styles.titulo}>Duración</Text>
          <Text style={Styles.subtitle}>Desde</Text>
          <DatePicker data={dateStart} />
          <View style={{ marginTop: 6 }}>
            <Text style={Styles.subtitle}>Hasta</Text>
            <DatePicker data={dateEnd} />
          </View>
        </View>
        <View style={Styles.field}>
          <Text style={Styles.titulo}>Meta</Text>
          <View style={Styles.row}>
            <TextInput
              onChangeText={(val) => handleTextChange("metaDonativos", val)}
              value={campData.metaDonativos}
              keyboardType="numeric"
              onFocus={() => setFocusMeta(true)}
              onBlur={() => setFocusMeta(false)}
              style={focusMeta ? Styles.inputMetaFocused : Styles.inputMeta}
            />
            <Text style={Styles.subtitle}>donaciones</Text>
          </View>
        </View>
        <View style={Styles.field}>
          <Text style={Styles.titulo}>Ubicación</Text>
          <View style={Styles.inputLocContainer}>
            <IconMI
              name="location-on"
              size={25}
              color={focusLoc ? "#FF9900" : "#B0B0B0"}
              style={{ left: 6 }}
            />
            <TextInput
              onChangeText={(val) => handleTextChange("ubicacion", val)}
              value={campData.ubicacion}
              placeholder="Escribe aquí"
              onFocus={() => setFocusLoc(true)}
              onBlur={() => setFocusLoc(false)}
              style={focusLoc ? Styles.inputLocFocused : Styles.inputLoc}
            />
          </View>
        </View>
        <View style={Styles.field}>
          <Text style={Styles.titulo}>Descripción</Text>
          <TextInput
            onChangeText={(val) => handleTextChange("descripcion", val)}
            value={campData.descripcion}
            onFocus={() => setFocusDesc(true)}
            onBlur={() => setFocusDesc(false)}
            style={focusDesc ? Styles.inputDescFocused : Styles.inputDesc}
            multiline={true}
          />
        </View>
        <Button
          handlePress={() => createCampaign()}
          disabled={buttonDisabled}
          text={
            loading === false ? (
              "Crear"
            ) : (
              <ActivityIndicator color="white" size={30} />
            )
          }
        />
      </View>
    </ScrollView>
  );
};

export default CreateCampaign;
