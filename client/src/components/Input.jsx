import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const Input = ({
  placeholder,
  handleTextChange,
  value,
  keyboardType,
  secureTextEntry,
  icon,
  iconColor,
  iconSize,
  ...props
}) => {
  const [inputStyle, setInputStyle] = useState(Styles.input);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (focus === true) {
      setInputStyle([Styles.input_container, Styles.input_focused]);
    } else {
      setInputStyle(Styles.input_container);
    }
  }, [focus]);

  return (
    <View style={inputStyle}>
      <TextInput
        style={Styles.input}
        placeholder={placeholder}
        onChangeText={(val) => handleTextChange(val)}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry || false}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <Icon style={Styles.icon} name={icon} color={iconColor} size={iconSize} />
    </View>
  );
};

const Styles = StyleSheet.create({
  input_container: {
    width: "98%",

    borderRadius: 10,
    backgroundColor: "#fff",
    marginTop: 10,

    borderWidth: 1,
    borderColor: "#B0B0B0",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    height: 40,
    paddingStart: 10,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
  input_focused: {
    borderColor: "#FF9900",
  },
  icon: {
    position: "absolute",
    right: 20,
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Input;
