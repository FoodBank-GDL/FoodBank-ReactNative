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
            <View style={Styles.content}>
                <Image
                    style={Styles.image_logo}
                    source={{
                        uri: "https://raw.githubusercontent.com/FoodBank-GDL/FoodBank-ReactNative/main/client/assets/FoodBankLogo_large.png",
                    }}
                />
                <Text style={Styles.text}>Campañas</Text>
            </View>

            <View
                style={Styles.line}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: Constants.statusBarHeight,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: -0.5, height: 0.5 },
        textShadowRadius: 10,
    },
    image_logo: {
        width: 150,
        height: 40,
        resizeMode: "contain",
    },
    line: {
        borderBottomColor: '#00000015',
        borderBottomWidth: 2,
    }
})

export default Header;
