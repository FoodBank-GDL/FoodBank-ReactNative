import { View } from "react-native";
import { Styles } from "./Styles";

import Header from "../../components/Header";
import CampaignContainer from "../../components/CampaignContainer";
import NavBar from "../../components/NavBar";
import NewCampaignButton from "../../components/NewCampaignButton";
import MapCampaignDetails from "../../components/MapCampaignDetails";

const Feed = (props) => {
  return (
    <View style={Styles.container}>
      <Header title={"Campañas"} />
      <CampaignContainer navigation={props.navigation} />
      {/* <MapCampaignDetails
        title={"ITESM Invierno 2022"}
        leader={"Regina Armenta"}
        startDate={"24 de agosto"}
        finishDate={"25 de septiembre"}
      /> */}
      <NavBar navigation={props.navigation} />
      <NewCampaignButton navigation={props.navigation} />
    </View>
  );
};

export default Feed;
