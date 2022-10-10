import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import { useState } from "react";

import DonationCard from "./DonationCard";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons"

const DonationsComponent = ({ data }) => {

    const [selected, setSelected] = useState("")

    const handleSelection = (item) => {
        setSelected(item)
    }

    const renderItem = ({ item }) => (
        <DonationCard
            id={item.user.userId}
            name={item.user.nombre}
            status={item.estado}
            donations={item.donaciones}
            selected={selected}
            handleSelection={handleSelection}
        />
    )

    return (
        <View style={Styles.container}>

            <View style={Styles.statusDescription}>
                <View style={Styles.text}>
                    <Text style={Styles.statusDescriptionText}>Estado del donativo:</Text>
                </View>

                <View style={Styles.status}>

                    <View style={Styles.statusCategory}>
                        <IconMCI
                            name="checkbox-blank-circle"
                            size={17}
                            color={"#FE4C4C"}
                        />
                        <Text style={Styles.statusDescriptionText}>Pendiente</Text>

                    </View>


                    <View style={Styles.statusCategory}>
                        <IconMCI
                            name="checkbox-blank-circle"
                            size={17}
                            color={"#8BE794"}
                        />
                        <Text style={Styles.statusDescriptionText}>Completado</Text>

                    </View>
                </View>
            </View>


            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.user.userId}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 20
    },
    statusDescription: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    statusDescriptionText: {
        fontSize: 12,
    },
    status: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: 200
    },
    statusCategory: {
        flexDirection: "row"
    }
})

export default DonationsComponent
