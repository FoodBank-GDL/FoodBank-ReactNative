import axios from "axios";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Keyboard,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { API_URL } from "../../../lib/constants";
import { Button, Divider, Input, StatusBar } from "../../components";
import { Styles } from "./Styles";

const Login = ({ navigation }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { storeCredentials } = useAuth();

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

  const handleTextChange = (field, val) => {
    setCredentials({
      ...credentials,
      [field]: val,
    });
  };

  const login = () => {
    if (credentials.email === "" || credentials.password === "") {
      setError("Favor de ingresar tus datos");
      return;
    } else {
      setError("");
    }
    setLoading(true);
    axios
      .post(`${API_URL}/user/login`, {
        email: credentials.email,
        password: credentials.password,
      })
      .then((res) => {
        setLoading(false);
        storeCredentials(
          res.data.credentials._tokenResponse.idToken,
          res.data.credentials.user.uid
        );
        navigation.navigate("Feed");
      })
      .catch((err) => {
        setLoading(false);
        if (Platform.OS === "web") {
          alert(
            "Ocurrió un error al intentar iniciar sesión: " + err.response.data
          );
        }
        Alert.alert(
          "Ocurrió un error al intentar iniciar sesión",
          err.response.data
        );
      });
  };

  return (
    <View style={Styles.container}>
      <StatusBar />
      <ScrollView style={Styles.content}>
        <View style={[Styles.centered, { paddingHorizontal: 36 }]}>
          <Image
            style={Styles.image_logo}
            source={{
              uri: "https://raw.githubusercontent.com/FoodBank-GDL/FoodBank-ReactNative/main/client/assets/FoodBank_Big.png",
            }}
          />
        </View>
        <Text style={Styles.title}>Login</Text>
        <Text style={Styles.subtitle}>Ingresa tus datos para continuar</Text>
        <Divider />
        <View style={{ alignItems: "center" }}>
          <Input
            placeholder="usuario@correo.com"
            handleTextChange={(val) => handleTextChange("email", val)}
            value={credentials.email}
          />
          <Input
            placeholder="Contraseña"
            handleTextChange={(val) => handleTextChange("password", val)}
            value={credentials.password}
            secureTextEntry={true}
          />
        </View>
        <Text style={Styles.error}>{error}</Text>
        <View style={Styles.button}>
          <Button
            handlePress={() => login()}
            text={
              loading === false ? (
                "Iniciar sesión"
              ) : (
                <ActivityIndicator color="white" size={30} />
              )
            }
          />
        </View>
        <View style={[Styles.centered, { marginTop: 12 }]}>
          <Text style={{ color: "#B4B4B4" }}>
            ¿Aún no tienes cuenta?{" "}
            <Text
              style={{ color: "#FF9900", fontWeight: "bold", flex: 0 }}
              onPress={() => navigation.navigate("Register")}
              includeFontPaddin={false}
            >
              Regístrate
            </Text>
          </Text>
        </View>
      </ScrollView>
      {keyboardShown ? "" : <View style={Styles.footer} />}
    </View>
  );
};

export default Login;
