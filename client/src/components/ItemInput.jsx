import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconAD from "react-native-vector-icons/AntDesign";

const ItemInput = (props) => {
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
      borderBottomColor: "#B0B0B0",
      marginTop: 25,
      fontSize: 17,
      width: "35%",
    },
    inputCantFocused: {
      borderBottomWidth: 1,
      borderBottomColor: "#FF9900",
      marginTop: 25,
      fontSize: 17,
      width: "35%",
    },
    dropdown: {
      flex: 1,
      backgroundColor: "transparent",
      borderBottomWidth: 1,
      borderBottomColor: "#B0B0B0",
    },
    dropdownFocused: {
      flex: 1,
      backgroundColor: "transparent",
      borderBottomWidth: 1,
      borderBottomColor: "#FF9900",
    },
  });

  const [focusProduct, setFocusProduct] = useState(false);
  const [focusCant, setFocusCant] = useState(false);
  const [focusUnit, setFocusUnit] = useState(false);
  const [textColor, setTextColor] = useState("#B0B0B0");

  const [donationData, setDonationData] = useState({
    cantidad: "",
    medida: "",
    producto: ""
  });

  const handleTextChange = (field, val) => {
    if(field == "medida")
      setTextColor("#000")
    setDonationData({
      ...donationData,
      [field]: val,
    });
  };

  props.pullData(donationData);

  return (
    <View style={Styles.container}>
      <View style={{flexDirection: "row"}}>
        <Text style={{ fontSize: 18, color: "#FF9900" }}>{"Artículo " + props.count}</Text>
        <TouchableOpacity onPress={() => props.delete(props.count)}>
          <IconAD
              name="close"
              color="#FF9900"
              size={22}
              style={{ marginBottom: 2, left: 230, top: 10 }}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        onChangeText={(val) => handleTextChange("producto", val)}
        value={donationData.producto}
        placeholder="Nombre de producto"
        onFocus={() => setFocusProduct(true)}
        onBlur={() => setFocusProduct(false)}
        style={focusProduct ? Styles.inputProductFocused : Styles.inputProduct}
      />
      <View style={{ flexDirection: "row" }}>
        <TextInput
          onChangeText={(val) => handleTextChange("cantidad", val)}
          value={donationData.cantidad}
          placeholder="Cantidad"
          onFocus={() => setFocusCant(true)}
          onBlur={() => setFocusCant(false)}
          style={focusCant ? Styles.inputCantFocused : Styles.inputCant}
          keyboardType="numeric"
        />
        <Text>      </Text>
        <SelectDropdown
          data={["Unidades", "Gramos", "Kilogramos", "Litros", "Mililitros"]}
          onSelect={(selectedItem) => handleTextChange("medida", selectedItem)}
          onFocus={() => setFocusUnit(true)}
          onBlur={() => setFocusUnit(false)}
          buttonStyle={focusUnit ? Styles.dropdownFocused : Styles.dropdown}
          defaultButtonText={"Medida"}
          buttonTextStyle={{
            color: textColor,
            fontSize: 17,
            marginBottom: -23,
          }}
          renderDropdownIcon={(isOpened) => {
            return (
              <IconFA
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={isOpened ? "#FF9900" : "#444"}
                size={12}
                style={{ marginBottom: -20 }}
              />
            );
          }}
          dropdownIconPosition={"right"}
        />
      </View>
    </View>
  );
};
export default ItemInput;
