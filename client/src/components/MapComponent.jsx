import { FlatList, StyleSheet, View, Dimensions, Text, Vibration } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Circle } from "react-native-maps";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import Loading from "./Loading/Loading";

import IconMI from "react-native-vector-icons/MaterialIcons";

import { MAPS_KEY } from "@env";
import Geocoder from "react-native-geocoding";
import MapCampaignDetails from "./MapCampaignDetails";

Geocoder.init(MAPS_KEY);

const MapComponent = ({ campaigns, navigation }) => {

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const [markers, setMarkers] = useState([]);
  const [markersReady, setMarkersReady] = useState(false);

  const handleGetCoords = (address, counter, campaign) => {

    let status = campaign.status
    let title = campaign.titulo
    let owner = campaign.user.nombre
    let ownerEmail = campaign.user.email
    let ownerId = campaign.user.userId
    let location = campaign.ubicacion
    let startDate = campaign.fechaInicio
    let finishDate = campaign.fechaExpiracion
    let progress = (campaign.donativosTotales * 100) / campaign.metaDonativos
    let donativosTotales = campaign.donativosTotales
    let metaDonativos = campaign.metaDonativos
    let categoriaEnseres = campaign.categoriaEnseres
    let categoriaFrutasVerduras = campaign.categoriaFrutasVerduras
    let categoriaNoPerecederos = campaign.categoriaNoPerecederos
    let categoriaRopa = campaign.categoriaRopa
    let accessibility = campaign.accesibilidad
    let description = campaign.descripcion

    Geocoder.from(address)
      .then((json) => {
        var loc = json.results[0].geometry.location;

        let marker = (
          <Marker
            key={counter}
            pinColor={"orange"}
            coordinate={{
              latitude: loc.lat,
              longitude: loc.lng,
            }}
          >
            <Callout tooltip={true} onPress={() => {
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
              })
            }
            }>
              <MapCampaignDetails
                title={campaign.titulo}
                user={campaign.user.nombre}
                startDate={campaign.fechaInicio}
                finishDate={campaign.fechaExpiracion}
                status={campaign.status}
                location={campaign.ubicacion}
                progress={(campaign.donativosTotales * 100) / campaign.metaDonativos}
                donativosTotales={campaign.donativosTotales}
                metaDonativos={campaign.metaDonativos}
                categoriaEnseres={campaign.categoriaEnseres}
                categoriaFrutasVerduras={campaign.categoriaFrutasVerduras}
                categoriaNoPerecederos={campaign.categoriaNoPerecederos}
                categoriaRopa={campaign.categoriaRopa}
                accessibility={campaign.accesibilidad}
                description={campaign.descripcion}
                navigation={navigation}
              />
            </Callout>

          </Marker>
        );

        setMarkers((prev) => [...prev, marker]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddCampaigns = () => {
    let counter = 2;
    campaigns.map((campaign) => {
      handleGetCoords(campaign.ubicacion, counter, campaign);
      counter += 1;
    });
    setMarkersReady(true);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (campaigns) {
      handleAddCampaigns();
    }
  }, [campaigns]);

  if (loading || errorMsg || !markersReady) {
    return <Loading />;
  }

  return (
    <View style={Styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={Styles.mapStyle}
        initialRegion={position}
        mapType="standard"
      >
        <Circle
          fillColor={"rgba(230,238,255,0.5)"}
          strokeColor={"blue"}
          strokeWidth={2}
          key={0}
          center={position}
          radius={1500}
          zIndex={1}
        />
        <Marker key={1} coordinate={position}>
          <IconMI name="my-location" size={30} color="#1A73E9" />
          <Callout>
            <Text style={{ width: 100, textAlign: "center" }}>Tu ubicación</Text>
          </Callout>
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
  },
});

export default MapComponent;
