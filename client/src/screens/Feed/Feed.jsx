import {
    View,
} from "react-native";
import { Styles } from "./Styles";

import Header from "../../components/Header";
import CampaignContainer from "../../components/CampaignContainer";

const Feed = (props) => {

    return (
        <View style={Styles.container}>
            <Header title={"Campaña"} />
            <CampaignContainer />
            <View style={{ height: 80, backgroundColor: 'orange', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}></View>
        </View>
    );
};

export default Feed;
