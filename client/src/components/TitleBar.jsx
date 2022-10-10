import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Constants from "expo-constants";

const TitleBar = ({ title }) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.back_button}>
        <Icon name="arrow-back" color="#5F5F5F" size={30} />
      </TouchableOpacity>
      <View style={Styles.content}>
        <Text style={Styles.text}>{title || " "}</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: "row",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  back_button: {
    left: 0,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default TitleBar;
