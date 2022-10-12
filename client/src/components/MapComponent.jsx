import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const MapComponent = () => {

    return (
        <View style={Styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={Styles.mapStyle}
                initialRegion={{
                    latitude: 41.3995345,
                    longitude: 2.1909796,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }}
                mapType="standard"
            ></MapView>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: "white",
        // paddingTop: 10,
        // paddingRight: 20,
        // paddingLeft: 20,
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default MapComponent;
