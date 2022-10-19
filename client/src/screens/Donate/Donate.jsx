import { Styles } from "./Styles";
import { Text, View, Alert, TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Category from "../../components/Category";
import axios from "axios";
import { API_URL } from "../../../lib/constants";
import ItemInput from "../../components/ItemInput";
import Loading from "../../components/Loading/Loading";
import { IconAD } from "../../../lib/icons";

const initialItem = { key: 1, cantidad: "", medida: "", producto: "" };
const campaignId = "NcbSs5ml72TqTpg26Kzc";
let verifDonation = false;

const Donate = ({ campaignID }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataGet, setDataGet] = useState();
  const [items, setItems] = useState([initialItem]);

  const getCampaign = async () => {
    setLoading(true);

    axios
      .get(`${API_URL}/campaign/info/${campaignId}`)
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

  const newItemComponents = items.map((item, index) => {
    return (
      <ItemInput
        key={index}
        data={item}
        handleTextChange={(value, field, key) =>
          handleTextChange(value, field, key)
        }
        delete={(key) => deleteItem(key)}
      />
    );
  });

  const createDonation = async () => {
    setLoading(true);

    for (let i = 0; i < items.length; i++) {
      if (i === items.length - 1) verifDonation = true;
      await axios
        .post(`${API_URL}/donation/create`, {
          campaignId: campaignId,
          cantidad: items[i].cantidad,
          medida: items[i].medida,
          producto: items[i].producto,
          userId: "JhcZP5uKzORJ3x0aKPvNfXO0Qoi1",
          estado: "pendiente",
        })
        .then((res) => {
          if (verifDonation) Alert.alert("Donaciones creadas exitosamente");
        })
        .catch((err) => {
          Alert.alert(
            "Lo sentimos. No pudimos crear su donación del artículo.",
            err.response.data
          );
        });
    }
    setLoading(false);
  };

  const handleTextChange = (value, field, key) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        return item.key === key ? { ...item, [field]: value } : { ...item };
      })
    );
  };

  const addItem = () => {
    const newItemKey = items[items.length - 1].key + 1;
    const newItem = { key: newItemKey, cantidad: "", producto: "", medida: "" };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const deleteItem = (key) => {
    if(items.length === 1) {
      Alert.alert("Debe conservar mínimo un artículo a donar")
      return
    }
    setItems((oldArray) => {
      return oldArray.filter((item) => item.key !== key);
    });
    setItems((prevItems) =>
      prevItems.map((item, index) => ({ ...item, ["key"]: index + 1 }))
    );
  };

  if (loading || error) {
    return <Loading />;
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
            <Category
              color="#50BE1C"
              footer="Frutas y verduras"
              show={dataGet.categoriaFrutasVerduras}
            />
            <Category
              color="#71D1FB"
              footer="Ropa"
              show={dataGet.categoriaRopa}
            />
            <Category
              color="#FFE86D"
              footer="No perecederos"
              show={dataGet.categoriaNoPerecederos}
            />
            <Category
              color="#FC8181"
              footer="Enseres"
              show={dataGet.categoriaEnseres}
            />
          </View>
          {newItemComponents}
          <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity onPress={() => addItem()}>
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
