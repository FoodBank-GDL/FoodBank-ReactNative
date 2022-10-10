import {
    FlatList,
    StyleSheet,
    View,
    Text,
    Alert
} from "react-native";
import { useEffect, useState } from "react";
import CampaignsComponent from "../CampaignsComponent/CampaignsComponent";

import axios from "axios";
import { API_URL } from "../../../lib/constants";

const CampaignContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState()

    const getCampaigns = async () => {
        axios.get(`${API_URL}/campaign/homeCards/NtrDFe1Plo7lzr3mIMOq`).then((res) => {
            setLoading(false);
            setData(res.data)
        })
            .catch((err) => {
                setLoading(false);
                setError(err.response.data)
                Alert.alert(
                    err.response.data
                );
            });
    }

    useEffect(() => {

        getCampaigns()

    }, [])

    if (loading || error) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <CampaignsComponent
            campaigns={data}
        />
    );
};

export default CampaignContainer;
