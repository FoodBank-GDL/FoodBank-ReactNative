import { StyleSheet, View, TouchableOpacity } from "react-native";

import IconE from "react-native-vector-icons/Entypo"
import IconFA from "react-native-vector-icons/FontAwesome"

const NavBar = ({ navigation }) => {

    const handleNavigate = (name) => {
        navigation.navigate(name)
    }

    return (
        <View style={Styles.container}>

            <View style={Styles.iconContainer}>
                <TouchableOpacity
                    onPress={() => handleNavigate("Feed")}
                >
                    <IconE
                        name="home"
                        style={Styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleNavigate("Login")}
                >
                    <IconFA
                        name="map"
                        style={Styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleNavigate("Register")}
                >
                    <IconFA
                        name="user"
                        style={Styles.icon}
                    />
                </TouchableOpacity>

            </View>

        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: 'orange',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: "70%",
        alignItems: "center"
    },
    icon: {
        fontSize: 25,
        color: "white"
    }
})

export default NavBar;
