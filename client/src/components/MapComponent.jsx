import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useState, useEffect } from "react";
import * as Location from 'expo-location';
import Loading from "./Loading/Loading";

import IconMI from "react-native-vector-icons/MaterialIcons"

import Geocoder from 'react-native-geocoding';

Geocoder.init("AIzaSyDt5vtCyrrAg076KW0WMCwOKItIVeySLI8");

const MapComponent = ({ campaigns }) => {

    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const [markers, setMarkers] = useState([])
    const [markersReady, setMarkersReady] = useState(false)

    const handleGetCoords = (address, counter) => {
        Geocoder.from(address)
            .then(json => {
                var location = json.results[0].geometry.location;

                let marker = <Marker
                    key={counter}
                    pinColor={'#ffc773'}
                    coordinate={{
                        latitude: location.lat,
                        longitude: location.lng,
                    }}
                >
                </Marker>

                setMarkers((prev) => [...prev, marker])
            })
            .catch(error => {
                console.log(error)
            });
    }

    const handleAddCampaigns = () => {
        let counter = 2
        campaigns.map((campaign) => {
            handleGetCoords(campaign.ubicacion, counter)
            counter += 1
        })
        setMarkersReady(true)
    }

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
    }, []);

    useEffect(() => {
        if (campaigns) {
            handleAddCampaigns()
        }

    }, [campaigns])

    if (loading || errorMsg || !markersReady) {
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
                <MapView.Circle
                    key={0}
                    center={position}
                    radius={1500}
                    strokeWidth={1}
                    strokeColor={'#1a66ff'}
                    fillColor={'rgba(230,238,255,0.5)'}
                />
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
                {markers}
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
        position: "absolute"
    },
});

export default MapComponent;
