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
            style={{ marginBottom: 2, left: 230, top: 10 }}
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
      <View style={{ flexDirection: "row" }}>
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
          // defaultValue={props.setDropValue(props.data.medida, props.data.key)}
          defaultValue="Unidades"
          onSelect={(selectedItem) => {
            props.handleTextChange(selectedItem, "medida", props.data.key);
            setTextColor("#000");
          }}
          buttonTextAfterSelection={(selectedItem, index) =>
            props.data.medida || "Medida"
          }
          onFocus={() => setFocusUnit(true)}
          onBlur={() => setFocusUnit(false)}
          buttonStyle={focusUnit ? Styles.dropdownFocused : Styles.dropdownBlur}
          defaultButtonText={"Medida"}
          buttonTextStyle={{
            color: textColor,
            fontSize: 15,
            marginTop: 24,
            textAlign: "justify",
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
    marginBottom: -10,
  },
  inputProductFocused: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#FF9900",
    marginTop: 3,
    fontSize: 17,
    marginBottom: -10,
  },
  inputCant: {
    borderBottomWidth: 1,
    marginTop: 25,
    borderBottomColor: "#B0B0B0",
    fontSize: 17,
    width: "30%",
  },
  inputCantFocused: {
    borderBottomWidth: 1,
    borderBottomColor: "#FF9900",
    width: "30%",
    marginTop: 25,
    fontSize: 17,
  },
  dropdownBlur: {
    flex: 1,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    height: "100%",
    marginRight: 20,
    borderBottomColor: "#B0B0B0",
  },
  dropdownFocused: {
    flex: 1,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    height: "100%",
    marginRight: 20,
    borderBottomColor: "#FF9900",
  },
});

export default ItemInput;
