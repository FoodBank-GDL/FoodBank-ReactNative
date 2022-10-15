import { View } from "react-native";
import { Styles } from "./Styles";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import MapContainer from "../../components/MapContainer";

const MapScreen = (props) => {
    return (
        <View style={Styles.container}>
            <Header title={"Mapa"} />
            <MapContainer />
            <NavBar navigation={props.navigation} />
        </View>
    );
};

export default MapScreen;
