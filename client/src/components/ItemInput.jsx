import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { IconAD, IconFA } from "../../lib/icons";

const ItemInput = (props) => {
  const [focusProduct, setFocusProduct] = useState(false);
  const [focusCant, setFocusCant] = useState(false);
  const [focusUnit, setFocusUnit] = useState(false);
  const [textColor, setTextColor] = useState("#B0B0B0");

  return (
    <View style={Styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 18, color: "#FF9900" }}>
          {"Artículo " + props.data.key}
        </Text>
        <TouchableOpacity onPress={() => props.delete(props.data.key)}>
          <IconAD
            name="close"
            color="#FF9900"
            size={22}
            style={{ marginBottom: 2, paddingLeft: "80%", width: "100%" }}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        onChangeText={(value) =>
          props.handleTextChange(value, "producto", props.data.key)
        }
        value={props.data.producto}
        placeholder="Nombre de producto"
        onFocus={() => setFocusProduct(true)}
        onBlur={() => setFocusProduct(false)}
        style={focusProduct ? Styles.inputProductFocused : Styles.inputProduct}
      />
      <View style={{ flexDirection: "row", alignItems: "center", height: 50 }}>
        <TextInput
          onChangeText={(value) =>
            props.handleTextChange(value, "cantidad", props.data.key)
          }
          value={props.data.cantidad}
          placeholder="Cantidad"
          onFocus={() => setFocusCant(true)}
          onBlur={() => setFocusCant(false)}
          style={focusCant ? Styles.inputCantFocused : Styles.inputCant}
          keyboardType="numeric"
        />
        <SelectDropdown
          data={["Unidades", "Gramos", "Kilogramos", "Litros", "Mililitros"]}
          onSelect={(selectedItem) => {
            props.handleTextChange(selectedItem, "medida", props.data.key);
            setTextColor("#000");
          }}
          buttonTextAfterSelection={(selectedItem, index) =>
            props.data.medida || "Medida"
          }
          onFocus={() => setFocusUnit(true)}
          onBlur={() => setFocusUnit(false)}
          buttonStyle={focusUnit ? Styles.dropdownFocused : Styles.dropdown}
          defaultButtonText={"Medida"}
          buttonTextStyle={{
            color: textColor,
            fontSize: 15,
            textAlign: "left",
          }}
          renderDropdownIcon={(isOpened) => {
            return (
              <IconFA
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={isOpened ? "#FF9900" : "#444"}
                size={12}
              />
            );
          }}
          dropdownIconPosition={"right"}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 10,
  },
  inputProduct: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#B0B0B0",
    marginTop: 3,
    fontSize: 17,
    marginBottom: -2,
  },
  inputProductFocused: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#FF9900",
    marginTop: 3,
    fontSize: 17,
    marginBottom: -2,
  },
  inputCant: {
    borderBottomWidth: 1,
    borderBottomColor: "#B0B0B0",
    fontSize: 17,
    width: "35%",
    height: "55%",
    marginRight: 25,
  },
  inputCantFocused: {
    borderBottomWidth: 1,
    borderBottomColor: "#FF9900",
    fontSize: 17,
    width: "35%",
    height: "55%",
    marginRight: 25,
  },
  dropdown: {
    flex: 1,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "#B0B0B0",
    height: "53%",
  },
  dropdownFocused: {
    flex: 1,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "#FF9900",
    height: "53%",
  },
});

export default ItemInput;
