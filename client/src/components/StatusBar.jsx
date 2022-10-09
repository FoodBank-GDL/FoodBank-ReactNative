import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
const StatusBar = () => {
  return <View style={Styles.statusbar}></View>;
};

const Styles = StyleSheet.create({
  statusbar: {
    paddingTop: Constants.statusBarHeight,
  },
});
export default StatusBar;
