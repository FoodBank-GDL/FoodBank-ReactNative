import { ScrollView, Text, View } from "react-native";
import { Button, StatusBar, TitleBar } from "../../components";
import ProgressBar from "../../components/ProgressBar";
import { Styles } from "./Styles";
import { IconFA5, IconMCI } from "../../../lib/icons";
import { parseDateYYYYMMDD_NoYear } from "../../../lib/parseDate";
import { useAuth } from "../../contexts/AuthContext";

const iconSize = 16;
const CampaignDetail = ({ navigation, ...props }) => {
  const {
    title,
    owner,
    ownerId,
    ownerEmail,
    startDate,
    finishDate,
    location,
    progress,
    donativosTotales,
    metaDonativos,
    description,
    categoriaEnseres,
    categoriaFrutasVerduras,
    categoriaNoPerecederos,
    categoriaRopa,
    accessibility,
    campaignId,
    ...campaignInfo
  } = props.route.params;
  const { userId } = useAuth();

  return (
    <View style={Styles.container}>
      <StatusBar />
      <TitleBar title="Campaña" navigation={navigation} />
      <ScrollView style={Styles.content}>
        <View style={Styles.category_icons}>
          <IconMCI
            name="food-apple"
            size={15}
            color={categoriaFrutasVerduras ? "#50BE1C" : "gray"}
            style={Styles.category}
          />
          <IconFA5
            name="tshirt"
            size={15}
            color={categoriaRopa ? "#71D1FB" : "gray"}
            style={Styles.category}
          />
          <IconMCI
            name="bottle-soda"
            size={15}
            color={categoriaNoPerecederos ? "#FFE86D" : "gray"}
            style={Styles.category}
          />
          <IconFA5
            name="shopping-basket"
            size={15}
            color={categoriaEnseres ? "#FC8181" : "gray"}
            style={Styles.category}
          />
        </View>
        <Text style={Styles.title}>{title}</Text>
        <ProgressBar
          percentage={`${progress}%`}
          height={10}
          backgroundColor={"#D9D9D9"}
          completedColor={"#8BE794"}
        />
        <Text style={Styles.secondary}>576 de 700 donaciones recolectadas</Text>
        <View style={[Styles.centered, { paddingTop: 12 }]}>
          {ownerId === userId ? (
            <View style={Styles.button_gestionar}>
              <Button
                text="Gestionar donaciones"
                handlePress={() =>
                  navigation.navigate("Donations", { campaignId })
                }
                height={40}
                borderRadius={30}
              />
            </View>
          ) : (
            <View style={Styles.button_donar}>
              <Button
                text="Donar"
                handlePress={() => navigation.navigate("CreateDonation", {
                  campaignId,
                  userId,
                  categoriaEnseres,
                  categoriaFrutasVerduras,
                  categoriaNoPerecederos,
                  categoriaRopa
                })}
                height={40}
                borderRadius={30}
              />
            </View>
          )}
        </View>

        <View style={Styles.bullet_point}>
          <IconFA5
            name="user-alt"
            color="#FF9900"
            style={Styles.icon}
            size={iconSize}
          />
          <Text style={Styles.info}>{owner}</Text>
        </View>
        <View style={Styles.bullet_point}>
          <IconFA5
            name="envelope"
            color="#FF9900"
            style={Styles.icon}
            size={iconSize}
          />
          <Text style={Styles.info}>{ownerEmail}</Text>
        </View>
        <View style={Styles.bullet_point}>
          <IconFA5
            name="clock"
            color="#FF9900"
            style={Styles.icon}
            size={iconSize}
          />
          <Text style={Styles.info}>
            {parseDateYYYYMMDD_NoYear(startDate)} -{" "}
            {parseDateYYYYMMDD_NoYear(finishDate)}
          </Text>
        </View>
        <View style={Styles.bullet_point}>
          <IconFA5
            name="map-marker-alt"
            color="#FF9900"
            style={Styles.icon}
            size={iconSize}
          />
          <Text style={Styles.info}>{location}</Text>
        </View>
        <View style={Styles.bullet_point}>
          <IconFA5
            name="globe-americas"
            color="#FF9900"
            style={Styles.icon}
            size={iconSize}
          />
          <Text style={Styles.info}>{accessibility || "Pública"}</Text>
        </View>

        <View>
          <View style={{ paddingTop: 16 }}>
            <Text style={Styles.subtitle}>Descripción</Text>
          </View>

          <Text style={Styles.description}>{description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CampaignDetail;
