import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useState, useEffect } from "react";
import * as Location from 'expo-location';
import Loading from "./Loading/Loading";

import IconMI from "react-native-vector-icons/MaterialIcons"

import Geocoder from 'react-native-geocoding';

Geocoder.init("AIzaSyDt5vtCyrrAg076KW0WMCwOKItIVeySLI8"); // use a valid API key

const MapComponent = () => {

    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);


    const [marker, setMarker] = useState()
    const [markerReady, setMarkerReady] = useState(false)

    useEffect(() => {
        (async () => {

            setLoading(true)

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});

            setPosition({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            })

            setLoading(false)
        })();

        Geocoder.from("Mi casa")
            .then(json => {
                var location = json.results[0].geometry.location;
                setMarker({
                    latitude: location.lat,
                    longitude: location.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                })
                setMarkerReady(true)
                console.log(location);
            })
            .catch(error => console.log(error));
    }, []);

    if (loading || errorMsg || !markerReady) {
        return <Loading />
    }

    return (
        <View style={Styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={Styles.mapStyle}
                initialRegion={position}
                mapType="standard"
            >
                <Marker
                    key={1}
                    coordinate={position}
                >
                    <IconMI
                        name="my-location"
                        size={30}
                        color="#1A73E9"
                    />
                </Marker>
                <Marker
                    key={2}
                    coordinate={marker}
                >
                </Marker>
            </MapView>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: "white",
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default MapComponent;
