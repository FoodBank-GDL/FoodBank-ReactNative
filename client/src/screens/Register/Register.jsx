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
import StatusBar from "../../components/StatusBar";
import { Styles } from "./Styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
/*import { useFonts } from "expo-font";*/

/*let fonts = {
  Roboto:
    "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap",
};*/

const Register = (props) => {
  /*
  const [fontsLoaded] = useFonts({
    Roboto_Black: require("../../../assets/fonts/Roboto-Black.ttf"),
    Roboto_Medium: require("../../../assets/fonts/Roboto-Medium.ttf"),
    Roboto_Regular: require("../../../assets/fonts/Roboto-Regular.ttf"),
  });

  
  if (!fontsLoaded) return null;*/

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      userData.email !== "" &&
      userData.name !== "" &&
      userData.phone !== ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [userData]);

  const register = () => {
    if (
      userData.email === "" &&
      userData.name === "" &&
      userData.phone === ""
    ) {
      alert("Favor de llenar todos los campos");
    }
    console.log(userData);
  };

  const handleTextChange = (field, val) => {
    console.log(val);
    setUserData({
      ...userData,
      [field]: val,
    });
  };

  const handlePasswordConfirmation = (val) => {};

  return (
    <View style={Styles.container}>
      <View style={Styles.content}>
        <View style={Styles.centered}>
          <Image
            style={Styles.image_logo}
            source={{
              uri: "https://raw.githubusercontent.com/FoodBank-GDL/FoodBank-ReactNative/main/client/assets/FoodBankLogo_large.png",
            }}
          />
        </View>
        <Text style={Styles.title}>Registro</Text>
        <Text style={Styles.subtitle}>Llena los campos para continuar</Text>
        <View style={{ alignItems: "center" }}>
          <Input
            style={Styles.input}
            placeholder="usuario@correo.com"
            handleTextChange={(val) => handleTextChange("email", val)}
            value={userData.email}
          />
          <Input
            style={Styles.input}
            placeholder="Contraseña"
            handleTextChange={() => console.log("TODO: password function")}
            secureTextEntry={true}
          />
          <Input
            style={Styles.input}
            placeholder="Confirmar contraseña"
            secureTextEntry={true}
            handleTextChange={(val) => handlePasswordConfirmation(val)}
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
              onPress={() => props.navigation.navigate("Login")}
            >
              Iniciar sesión
            </Text>
          </Text>
        </View>
      </View>
      <View style={Styles.footer} />
    </View>
  );
};

export default Register;
