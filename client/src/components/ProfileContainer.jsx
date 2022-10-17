import { Alert } from "react-native";
import { useEffect, useState } from "react";

import axios from "axios";
import { API_URL } from "../../lib/constants";
import Loading from "./Loading/Loading";

import { View, Text } from "react-native";
import ProfileComponent from "./ProfileComponent";

const ProfileContainer = ({ userId }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState();

    const getUser = async () => {
        setLoading(true);

        axios.get(`${API_URL}/user/info/${userId}`)
            .then((res) => {
                setData(res.data);
                console.log(res.data)
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                setError(err.response.getData);
                Alert.alert(err.response.getData);
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    if (loading || error) {
        return <Loading />;
    }

    return <ProfileComponent data={data} />
};

export default ProfileContainer;
