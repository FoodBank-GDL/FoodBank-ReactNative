import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from "react-native";

const Loading = () => {

    return (
        <View style={Styles.container}>
            <ActivityIndicator size="large" color="orange" />
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: "white",
        justifyContent: "center",
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
})

export default Loading;
