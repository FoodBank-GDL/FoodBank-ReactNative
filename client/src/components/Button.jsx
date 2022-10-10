import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const Button = ({
  handlePress,
  text,
  disabled,
  color,
  borderRadius,
  height,
  ...props
}) => {
  const [colorState, setColorState] = useState(color);
  useEffect(() => {
    if (disabled === true) {
      setColorState("#b5b5b5");
    } else {
      setColorState(color);
    }
  }, [disabled]);

  return (
    <TouchableOpacity
      disabled={disabled || false}
      style={[
        Styles.button,
        {
          backgroundColor: colorState || Styles.button.backgroundColor,
          borderRadius: borderRadius || Styles.button.borderRadius,
          height: height||Styles.button.height,
        },
      ]}
      onPress={() => handlePress()}
    >
      <Text style={Styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  button: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: "#FF9900",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default Button;
