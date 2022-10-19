import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import IconFA from "react-native-vector-icons/FontAwesome";

const DatePicker = (props) => {
  const Styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: 200,
    },
    dropdown: {
      flex: 1,
      height: 35,
      backgroundColor: "transparent",
      borderBottomWidth: 1,
      borderBottomColor: "#B0B0B0",
    },
    dropdownFocused: {
      flex: 1,
      height: 35,
      backgroundColor: "transparent",
      borderBottomWidth: 1,
      borderBottomColor: "#FF9900",
    },
  });

  const [focusDay, setFocusDay] = useState(false);
  const [focusMonth, setFocusMonth] = useState(false);
  const [focusHour, setFocusHour] = useState(false);
  const [focusMinute, setFocusMinute] = useState(false);

  return (
    <View style={Styles.container}>
      <SelectDropdown
        data={Array.from({ length: 31 }, (_, i) => i + 1)}
        onSelect={(selectedItem) => {
          props.data.dia = selectedItem;
        }}
        onFocus={() => setFocusDay(true)}
        onBlur={() => setFocusDay(false)}
        buttonStyle={focusDay ? Styles.dropdownFocused : Styles.dropdown}
        defaultButtonText={"día"}
        buttonTextStyle={{ color: "#555", fontSize: 17 }}
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
      <Text style={{ fontSize: 19, color: "#444", marginTop: 5 }}> / </Text>
      <SelectDropdown
        data={[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ]}
        onSelect={(selectedItem) => {
          props.data.mes = selectedItem;
        }}
        onFocus={() => setFocusMonth(true)}
        onBlur={() => setFocusMonth(false)}
        buttonStyle={focusMonth ? Styles.dropdownFocused : Styles.dropdown}
        defaultButtonText={"mes"}
        buttonTextStyle={{ color: "#555", fontSize: 17 }}
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
  );
};

export default DatePicker;
