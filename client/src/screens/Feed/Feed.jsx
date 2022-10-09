import {
    View,
} from "react-native";
import { Styles } from "./Styles";

import Header from "../../components/Header";
import CampaignContainer from "../../components/CampaignContainer";
import NavBar from "../../components/NavBar";

const Feed = (props) => {

    return (
        <View style={Styles.container}>
            <Header title={"Campaña"} />
            <CampaignContainer />
            <NavBar navigation={props.navigation} />
        </View>
    );
};

export default Feed;
