import { ScrollView, Text, View } from "react-native";
import { Button, StatusBar, TitleBar } from "../../components";
import ProgressBar from "../../components/ProgressBar";
import { Styles } from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome5";

const iconSize = 20;
const CampaignDetail = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <StatusBar />
      <TitleBar title="Campaña" />
      <ScrollView style={Styles.content}>
        <Text style={Styles.title}>ITESM Invierno 2022</Text>
        <ProgressBar
          percentage={`${75}%`}
          height={10}
          backgroundColor={"#D9D9D9"}
          completedColor={"#8BE794"}
        />
        <Text style={Styles.secondary}>576 de 700 donaciones recolectadas</Text>
        <View style={[Styles.centered, { paddingTop: 12 }]}>
          <View style={Styles.button}>
            <Button
              text="Donar"
              handlePress={() => navigation.navigate("Feed")}
              height={40}
              borderRadius={30}
            />
          </View>
        </View>

        <View style={Styles.bullet_point}>
          <Icon
            name="user-alt"
            color="#FF9900"
            style={Styles.icon}
            size={iconSize}
          />
          <Text style={Styles.info}>Regina Armenta</Text>
        </View>
        <View style={Styles.bullet_point}>
          <Icon
            name="envelope"
            color="#FF9900"
            style={Styles.icon}
            size={iconSize}
          />
          <Text style={Styles.info}>regina.armenta@gmail.com</Text>
        </View>
        <View style={Styles.bullet_point}>
          <Icon
            name="clock"
            color="#FF9900"
            style={Styles.icon}
            size={iconSize}
          />
          <Text style={Styles.info}>24 de agosto - 25 de septiembre</Text>
        </View>
        <View style={Styles.bullet_point}>
          <Icon
            name="map-marker-alt"
            color="#FF9900"
            style={Styles.icon}
            size={iconSize}
          />
          <Text style={Styles.info}>
            Tecnológico de Monterrey, Campus Guadalajara
          </Text>
        </View>
        <View style={Styles.bullet_point}>
          <Icon
            name="globe-americas"
            color="#FF9900"
            style={Styles.icon}
            size={iconSize}
          />
          <Text style={Styles.info}>Pública</Text>
        </View>
        <View style={{ paddingTop: 16 }}>
          <Text style={Styles.subtitle}>Descripción</Text>
        </View>

        <Text style={Styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </ScrollView>
    </View>
  );
};

export default CampaignDetail;
