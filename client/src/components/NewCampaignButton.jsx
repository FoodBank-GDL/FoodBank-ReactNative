import { StyleSheet, TouchableOpacity, View } from "react-native";
import IconAD from "react-native-vector-icons/AntDesign";

const NewCampaignButton = ({ navigation }) => {

    const Styles = StyleSheet.create({
        circle: {
            width: 62,
            height: 62,
            borderRadius: 62 / 2,
            backgroundColor: "#FF9900",
            marginTop: 8,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 2.5,
            elevation: 3,
            position: "absolute",
            bottom: 10,
            right: 20,
            alignSelf: "flex-end"
        },
    });

    return (
        <TouchableOpacity onPress={() => navigation.navigate("CreateCampaign")}>
            <View style={Styles.circle}>
                <IconAD name="plus" color={"white"} size={40} />
            </View>
        </TouchableOpacity>
    );
};

export default NewCampaignButton;