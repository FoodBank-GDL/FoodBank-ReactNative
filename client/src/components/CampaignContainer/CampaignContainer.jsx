import { Alert } from "react-native";
import { useEffect, useState } from "react";
import CampaignsComponent from "../CampaignsComponent/CampaignsComponent";

import axios from "axios";
import { API_URL } from "../../../lib/constants";
import Loading from "../Loading/Loading";
import { useAuth } from "../../contexts/AuthContext";
import { useIsFocused } from "@react-navigation/native";

const CampaignContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  const isFocused = useIsFocused();

  const { userId } = useAuth();

  const getCampaigns = async () => {
    if (userId === "") {
      return;
    }
    axios
      .get(`${API_URL}/campaign/homeCards/${userId}`)
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
  }, [userId]);
  useEffect(() => {
    if (isFocused === true) {
      getCampaigns();
    }
  }, [isFocused]);

  if (loading || error) {
    return <Loading />;
  }

  return <CampaignsComponent campaigns={data} navigation={props.navigation} />;
};

export default CampaignContainer;
