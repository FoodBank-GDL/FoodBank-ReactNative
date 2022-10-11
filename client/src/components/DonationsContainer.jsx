import {
    View,
    Text
} from "react-native";
import DonationsComponent from "./DonationsComponent";
import { useState, useEffect } from "react";

import axios from "axios";

import Loading from "./Loading/Loading";
import { API_URL } from "../../lib/constants";

const DonationsContainer = ({ campaignId }) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState()

    const getDonations = async () => {
        axios.get(`${API_URL}/donation/campaignDonations/${campaignId}`).then((res) => {
            setLoading(false);
            setData(res.data)
        })
            .catch((err) => {
                setError(err.response.data)
                setLoading(false);
                Alert.alert(
                    err.response.data
                );
            });
    }

    useEffect(() => {

        getDonations()

    }, [])

    if (loading || error) {
        return (
            <Loading />
        )
    }

    return (
        <DonationsComponent data={data} />
    );
};

export default DonationsContainer
