import { Image, Keyboard, ScrollView, Text, View, Alert } from "react-native";
import StatusBar from "../../components/StatusBar";
import { Styles } from "./Styles";
import Input from "../../components/Input";
import axios from "axios";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { API_URL } from "../../../lib/contants";

const Register = ({ navigation }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const [confirmPassInfo, setConfirmPassInfo] = useState({
    value: "",
    icon: "",
    color: "",
    confirmed: false,
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [keyboardShown, setKeyboardShown] = useState(false);

  useEffect(() => {
    if (
      userData.email !== "" &&
      userData.password !== "" &&
      userData.name !== "" &&
      userData.phone !== "" &&
      confirmPassInfo.confirmed === true
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [userData]);

  useEffect(() => {
    const keyboardShown = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardShown(true);
    });

    const keyboardHidden = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardShown(false);
    });

    return () => {
      keyboardHidden.remove();
      keyboardShown.remove();
    };
  }, []);

  useEffect(() => {
    if (confirmPassInfo.value === "") return;
    if (confirmPassInfo.value !== userData.password) {
      setConfirmPassInfo({
        ...confirmPassInfo,
        icon: "cross",
        color: "red",
        confirmed: false,
      });
    } else {
      setConfirmPassInfo({
        ...confirmPassInfo,
        icon: "check",
        color: "green",
        confirmed: true,
      });
    }
  }, [confirmPassInfo.value]);

  const register = () => {
    if (userData.password.length < 6) {
      Alert.alert(
        "¡Contraseña muy corta!",
        "Favor de ingresar una contraseña de al menos 6 caracteres"
      );
      return;
    }

    try {
      axios
        .post(`${API_URL}/user/register`, {
          email: userData.email,
          password: userData.password,
          nombre: userData.name,
          telefono: userData.phone,
        })
        .then((res) => {
          console.log(res);
          navigation.navigate("Login");
        })
        .catch((err) => {
          Alert.alert("Something went wrong!");
        });
    } catch (err) {
      console.log("catched");
      console.error(err);
    }
  };

  const handleTextChange = (field, val) => {
    setUserData({
      ...userData,
      [field]: val,
    });
  };

  const handlePasswordConfirmation = (val) => {
    setConfirmPassInfo({
      ...userData,
      value: val,
    });
  };

  return (
    <View style={Styles.container}>
      <StatusBar />
      <View style={[Styles.centered, { paddingHorizontal: 36 }]}>
        <Image
          style={Styles.image_logo}
          source={{
            uri: "https://raw.githubusercontent.com/FoodBank-GDL/FoodBank-ReactNative/main/client/assets/FoodBankLogo_large.png",
          }}
        />
      </View>
      <ScrollView style={Styles.content} keyboardShouldPersistTaps="handled">
        <Text style={Styles.title}>Registro</Text>
        <Text style={Styles.subtitle}>Llena los campos para continuar</Text>
        <View style={{ alignItems: "center" }}>
          <Input
            style={Styles.input}
            placeholder="usuario@correo.com"
            handleTextChange={(val) => handleTextChange("email", val)}
            value={userData.email}
            keyboardType={"email-address"}
          />
          <Input
            style={Styles.input}
            placeholder="Contraseña"
            handleTextChange={(val) => handleTextChange("password", val)}
            secureTextEntry={true}
          />
          <Text
            style={{
              color: "#B4B4B4",
              alignSelf: "flex-start",
              paddingLeft: 5,
            }}
          >
            Utiliza como mínimo 6 caracteres
          </Text>
          <Input
            style={Styles.input}
            placeholder="Confirmar contraseña"
            secureTextEntry={true}
            handleTextChange={(val) => handlePasswordConfirmation(val)}
            value={confirmPassInfo.value}
            icon={confirmPassInfo.icon}
            iconColor={confirmPassInfo.color}
            iconSize={24}
          />
          <Input
            style={Styles.input}
            placeholder="Nombre completo"
            handleTextChange={(val) => handleTextChange("name", val)}
          />
          <Input
            style={Styles.input}
            placeholder="Número de telefono"
            handleTextChange={(val) => handleTextChange("phone", val)}
            keyboardType={"phone-pad"}
          />
        </View>
        <View style={Styles.button}>
          <Button handlePress={() => register()} disabled={buttonDisabled} />
        </View>
        <View style={[Styles.centered, { marginTop: 12 }]}>
          <Text style={{ color: "#B4B4B4" }}>
            ¿Ya tienes cuenta?{" "}
            <Text
              style={{ color: "#FF9900", fontWeight: "bold" }}
              onPress={() => navigation.navigate("Login")}
            >
              Iniciar sesión
            </Text>
          </Text>
        </View>
      </ScrollView>
      {keyboardShown ? "" : <View style={Styles.footer} />}
    </View>
  );
};

export default Register;
