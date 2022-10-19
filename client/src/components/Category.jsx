import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconFA5 from "react-native-vector-icons/FontAwesome5";

const Category = (props) => {
  const [tapFrutasVerduras, setTapFrutasVerduras] = useState(false);
  const [tapRopa, setTapRopa] = useState(false);
  const [tapNoPerecederos, setTapNoPerecederos] = useState(false);
  const [tapEnseres, setTapEnseres] = useState(false);

  const Styles = StyleSheet.create({
    circle: {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      backgroundColor: "#C5C5C5",
      marginTop: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    circleSelected: {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      backgroundColor: props.color,
      marginTop: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    footer: {
      color: "#B0B0B0",
      fontWeight: "light",
      fontSize: 12,
    },
    footerSelected: {
      color: "#555",
      fontWeight: "light",
      fontSize: 12,
    },
    content: {
      alignItems: "center",
      marginRight: 4,
    },
  });

  const onTapFrutasVerduras = () => {
    if (props.isButton) {
      if (tapFrutasVerduras) {
        setTapFrutasVerduras(!tapFrutasVerduras);
        props.data.categoriaFrutasVerduras = false;
      } else {
        setTapFrutasVerduras(true);
        props.data.categoriaFrutasVerduras = true;
      }
    }
  };

  const onTapRopa = () => {
    if (props.isButton) {
      if (tapRopa) {
        setTapRopa(!tapRopa);
        props.data.categoriaRopa = false;
      } else {
        setTapRopa(true);
        props.data.categoriaRopa = true;
      }
    }
  };

  const onTapNoPerecederos = () => {
    if (props.isButton) {
      if (tapNoPerecederos) {
        setTapNoPerecederos(!tapNoPerecederos);
        props.data.categoriaNoPerecederos = false;
      } else {
        setTapNoPerecederos(true);
        props.data.categoriaNoPerecederos = true;
      }
    }
  };

  const onTapEnseres = () => {
    if (props.isButton) {
      if (tapEnseres) {
        setTapEnseres(!tapEnseres);
        props.data.categoriaEnseres = false;
      } else {
        setTapEnseres(true);
        props.data.categoriaEnseres = true;
      }
    }
  };

  if (props.footer == "Frutas y verduras" && props.show == true) {
    return (
      <View style={Styles.content} onTouchStart={onTapFrutasVerduras}>
        <View
          style={
            tapFrutasVerduras || !props.isButton
              ? Styles.circleSelected
              : Styles.circle
          }
        >
          <IconMCI name="food-apple" size={45} color="white" />
        </View>
        <Text
          style={
            tapFrutasVerduras || !props.isButton
              ? Styles.footerSelected
              : Styles.footer
          }
        >
          {props.footer}
        </Text>
      </View>
    );
  }

  if (props.footer == "Ropa" && props.show == true) {
    return (
      <View style={Styles.content} onTouchStart={onTapRopa}>
        <View
          style={
            tapRopa || !props.isButton
              ? Styles.circleSelected
              : Styles.circle
          }
        >
          <IconFA5 name="tshirt" size={33} color="white" />
        </View>
        <Text
          style={
            tapRopa || !props.isButton
              ? Styles.footerSelected
              : Styles.footer
          }
        >
          {props.footer}
        </Text>
      </View>
    );
  }

  if (props.footer == "No perecederos" && props.show == true) {
    return (
      <View style={Styles.content} onTouchStart={onTapNoPerecederos}>
        <View
          style={
            tapNoPerecederos || !props.isButton
              ? Styles.circleSelected
              : Styles.circle
          }
        >
          <IconMCI name="bottle-soda" size={50} color="white" />
        </View>
        <Text
          style={
            tapNoPerecederos || !props.isButton
              ? Styles.footerSelected
              : Styles.footer
          }
        >
          {props.footer}
        </Text>
      </View>
    );
  }

  if (props.footer == "Enseres" && props.show == true) {
    return (
      <View style={Styles.content} onTouchStart={onTapEnseres}>
        <View
          style={
            tapEnseres || !props.isButton
              ? Styles.circleSelected
              : Styles.circle
          }
        >
          <IconFA5 name="shopping-basket" size={35} color="white" />
        </View>
        <Text
          style={
            tapEnseres || !props.isButton
              ? Styles.footerSelected
              : Styles.footer
          }
        >
          {props.footer}
        </Text>
      </View>
    );
  }
};

export default Category;
