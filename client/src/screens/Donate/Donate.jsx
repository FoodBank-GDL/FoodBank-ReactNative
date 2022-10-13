import { Styles } from "./Styles";
import { Text, View, Alert, TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Category from "../../components/Category";
import axios from "axios";
import { API_URL } from "../../../lib/constants";
import ItemInput from "../../components/ItemInput";
import IconAD from "react-native-vector-icons/AntDesign";
import Loading from "../../components/Loading/Loading";

const Donate = ({ campaignID }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataGet, setDataGet] = useState();
  const [count, setCount] = useState(2);
  const [itemsArray, setItemsArray] = useState([]);
  const [saveArray] = useState([]);

  const campaignId = "NcbSs5ml72TqTpg26Kzc"

  const getCampaign = async () => {

    setLoading(true)

    axios.get(`${API_URL}/campaign/info/${campaignId}`)
      .then((res) => {
        setDataGet(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.dataGet);
        Alert.alert(err.response.dataGet);
      });
  };

    useEffect(() => {
      getCampaign();
    }, []);

  const pullDonation = (pullData) => {
    if (saveArray.length < count - 1) {
      saveArray.push(pullData);
    } else {
      saveArray[count - 2] = pullData;
    }
  };

  const createDonation = async () => {
    setLoading(true);

    console.log("create: ", itemsArray)

    for (let i = 0; i < saveArray.length; i++) {
      await axios
        .post(`${API_URL}/donation/create`, {
          campaignId: campaignId,
          cantidad: saveArray[i].cantidad,
          medida: saveArray[i].medida,
          producto: saveArray[i].producto,
          userId: "JhcZP5uKzORJ3x0aKPvNfXO0Qoi1",
          estado: "pendiente",
        })
        .then((res) => {
            Alert.alert("Donaciones creadas exitosamente");
        })
        .catch((err) => {
          Alert.alert(
            "Lo sentimos. No pudimos crear su donación del artículo.",
            err.response.data
          );
        });
    }
    setLoading(false)
  };

  const newItem = () => {
    setCount(count + 1);
    console.log(count)
    const newComponent = (
      <ItemInput key={count} count={count} pullData={pullDonation} delete={() => cancelDonation(count)}/>
    );
    // const newarr = itemsArray
    // newarr.push(newItem)
    // console.log("new: ", newarr)
    setItemsArray((prevItemsArray) => [...prevItemsArray, newComponent]);
    console.log("items: ", itemsArray)
  };

  const cancelDonation = (index) => {
    console.log("index: ", index)
    // console.log("before: ", saveArray)
    // if(index == 1)
    //   saveArray.pop()
    // else {
    //   saveArray.splice(index-2, 1)
    // }
    // console.log("after: ", saveArray)
    // console.log("save: ", saveArray)
    // const auxArray = itemsArray
    console.log("arr1: ", itemsArray)
    setItemsArray((prevItemsArray) => prevItemsArray.map((item) => {
      if (count === index) {
        setCount(prevCount => prevCount)
      }
    }));
    console.log("arr2: ", itemsArray)
    // setItemsArray(auxArray)
    // console.log("items: ", itemsArray)
    // console.log("index: ", index)
    setCount(itemsArray.length+3)
  }

  if (loading || error) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <ScrollView style={Styles.container}>
        <View style={Styles.content}>
          <Text style={{ fontWeight: "bold" }}>
            Favor de ingresar artículos relevantes a la(s) categoría(s) de la
            campaña:
          </Text>
          <View style={{ flexDirection: "row", marginBottom: 5, marginTop: 5 }}>
          <Category color="#50BE1C" footer="Frutas y verduras" show={dataGet.categoriaFrutasVerduras} />
            <Category color="#71D1FB" footer="Ropa" show={dataGet.categoriaRopa} />
            <Category color="#FFE86D" footer="No perecederos" show={dataGet.categoriaNoPerecederos} />
            <Category color="#FC8181" footer="Enseres" show={dataGet.categoriaEnseres} />
          </View>
          <ItemInput key={1} count={1} pullData={pullDonation} delete={() => cancelDonation(1)}/>
          {itemsArray}
          <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity onPress={newItem}>
              <View style={Styles.circle}>
                <IconAD name="plus" color={"white"} size={24} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={Styles.savebtn} onPress={() => createDonation()}>
        <Text style={Styles.btntext}>Guardar</Text>
      </TouchableOpacity>
    </>
  );
};

export default Donate;
