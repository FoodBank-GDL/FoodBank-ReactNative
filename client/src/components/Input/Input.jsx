import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  const [inputStyle, setInputStyle] = useState(Styles.input);

  return (
    <TextInput
      style={inputStyle}
      placeholder={props.placeholder}
      onChangeText={(val) => props.handleTextChange(val)}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
      onFocus={() => setInputStyle(Styles.input_focused)}
      onBlur={() => setInputStyle(Styles.input)}
    />
  );
};

const Styles = StyleSheet.create({
  input: {
    paddingStart: 10,
    borderWidth: 1,
    borderColor: "#B0B0B0",
    width: "100%",
    height: 40,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
  input_focused: {
    paddingStart: 10,
    borderWidth: 1,
    width: "100%",
    height: 40,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#FFF",
    borderColor: "#FF9900",
  },
});

export default Input;
