import { StyleSheet, View } from "react-native";

const Divider = ({ width, height }) => {
  const Styles = StyleSheet.create({
    divider: {
      width: width || 70,
      height: height || 3,
      backgroundColor: "#FF9900",
      marginTop: 4,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  });

  return (
    <View style={{ paddingHorizontal: 2 }}>
      <View style={Styles.divider} />
    </View>
  );
};

export default Divider;
