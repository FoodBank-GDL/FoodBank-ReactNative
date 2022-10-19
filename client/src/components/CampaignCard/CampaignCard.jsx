import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import IconFA from "react-native-vector-icons/FontAwesome";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconFA5 from "react-native-vector-icons/FontAwesome5";
import IconE from "react-native-vector-icons/Entypo";

import ProgressBar from "../ProgressBar/ProgressBar";

import { parseDateYYYYMMDD_NoYear } from "../../../lib/parseDate";

const CapmpaignCard = ({
  status,
  title,
  owner,
  ownerId,
  ownerEmail,
  location,
  startDate,
  finishDate,
  progress,
  donativosTotales,
  metaDonativos,
  categoriaEnseres,
  categoriaFrutasVerduras,
  categoriaNoPerecederos,
  categoriaRopa,
  navigation,
  accessibility,
  description,
  campaignId,
  ...props
}) => {
  const renderIcon = () => {
    let color = "gray";

    if (status === "Donativo pendiente") {
      color = "#FE4C4C";
    } else if (status === "Donativo completado") {
      color = "#8BE794";
    } else {
      color = "#FF9900";
    }

    return (
      <View>
        <IconFA name="circle" size={11} color={color} />
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CampaignDetail", {
          status,
          title,
          owner,
          ownerId,
          ownerEmail,
          location,
          startDate,
          finishDate,
          progress,
          donativosTotales,
          metaDonativos,
          categoriaEnseres,
          categoriaFrutasVerduras,
          categoriaNoPerecederos,
          categoriaRopa,
          accessibility,
          description,
          campaignId,
          props,
        })
      }
      style={{alignItems: "center", paddingTop: 10}}
    >
      <View
        style={
          status === ""
            ? Styles.container
            : status === "Donativo pendiente" ||
              status === "Donativo completado"
            ? Styles.containerDonativo
            : Styles.containerLider
        }
      >
        <View style={Styles.header}>
          {status != "" && (
            <View style={Styles.statusIconText}>
              {renderIcon()}

              <Text style={Styles.status}>{status}</Text>
            </View>
          )}

          <View style={Styles.categories}>
            <IconMCI
              name="food-apple"
              size={15}
              color={categoriaFrutasVerduras ? "#50BE1C" : "gray"}
              style={Styles.category}
            />
            <IconFA5
              name="tshirt"
              size={15}
              color={categoriaRopa ? "#71D1FB" : "gray"}
              style={Styles.category}
            />
            <IconMCI
              name="bottle-soda"
              size={15}
              color={categoriaNoPerecederos ? "#FFE86D" : "gray"}
              style={Styles.category}
            />
            <IconFA5
              name="shopping-basket"
              size={15}
              color={categoriaEnseres ? "#FC8181" : "gray"}
              style={Styles.category}
            />
          </View>
        </View>

        <Text style={Styles.title}>{title}</Text>

        <View>
          <View style={Styles.content}>
            <IconFA name="user" size={15} style={Styles.icon} />

            <Text style={Styles.contentText}>{owner}</Text>
          </View>
          <View style={Styles.content}>
            <IconE name="location-pin" size={15} style={Styles.icon} />

            <Text style={Styles.contentText}>{location}</Text>
          </View>
          <View style={Styles.content}>
            <IconAnt name="clockcircleo" size={15} style={Styles.icon} />

            <Text style={Styles.contentText}>
              {parseDateYYYYMMDD_NoYear(startDate)} -{" "}
              {parseDateYYYYMMDD_NoYear(finishDate)}
            </Text>
          </View>
        </View>

        <ProgressBar
          percentage={`${progress}%`}
          height={10}
          backgroundColor={"#D9D9D9"}
          completedColor={"#8BE794"}
        />
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 170,
    width: "95%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: "#FAFAFA",
    borderWidth: 3,
    borderRadius: 15,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  containerDonativo: {
    height: 170,
    backgroundColor: "#EDF6FF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderColor: "#FAFAFA",
    borderWidth: 3,
    borderRadius: 15,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  containerLider: {
    height: 170,
    backgroundColor: "#FFFAED",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderColor: "#FAFAFA",
    borderWidth: 3,
    borderRadius: 15,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    height: 25,
  },
  icon: {
    color: "#FF9900",
    width: 15,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  contentText: {
    fontSize: 11,
    paddingLeft: 10,
  },
  categories: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: 0,
  },
  category: {
    marginLeft: 7,
  },
  status: {
    fontSize: 9,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginLeft: 7,
  },
  header: {
    flexDirection: "row",
  },
  statusIconText: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CapmpaignCard;
