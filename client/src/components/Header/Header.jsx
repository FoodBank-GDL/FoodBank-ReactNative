import {
    Image,
    View,
    StyleSheet,
    Text
} from "react-native";
import StatusBar from "../StatusBar";
import Constants from "expo-constants";

const Header = (props) => {

    return (
        <View style={Styles.container}>
            <Image
                style={Styles.image_logo}
                source={{
                    uri: "https://raw.githubusercontent.com/FoodBank-GDL/FoodBank-ReactNative/main/client/assets/FoodBankLogo_large.png",
                }}
            />
            <Text style={Styles.text}>Campañas</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: Constants.statusBarHeight,
    },
    text: {
        fontSize: 30
    },
    image_logo: {
        width: 140,
        height: 40,
        resizeMode: "contain",
    },
})

export default Header;
