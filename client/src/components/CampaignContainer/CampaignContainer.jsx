import { FlatList, StyleSheet, View, Text, Alert } from "react-native";
import { useEffect, useState } from "react";
import CampaignsComponent from "../CampaignsComponent/CampaignsComponent";

import axios from "axios";
import { API_URL } from "../../../lib/constants";
import Loading from "../Loading/Loading";

const CampaignContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  const getCampaigns = async () => {
    axios
      .get(`${API_URL}/campaign/homeCards/JhcZP5uKzORJ3x0aKPvNfXO0Qoi1`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setError(err.response.data);
        setLoading(false);
        Alert.alert(err.response.data);
      });
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  if (loading || error) {
    return <Loading />;
  }

  return <CampaignsComponent campaigns={data} navigation={props.navigation} />;
};

export default CampaignContainer;
