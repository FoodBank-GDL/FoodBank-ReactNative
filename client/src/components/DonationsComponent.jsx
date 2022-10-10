import {
    View,
    Text,
    StyleSheet
} from "react-native";
import DonationCard from "./DonationCard";

import IconMCI from "react-native-vector-icons/MaterialCommunityIcons"

const DonationsComponent = ({ }) => {

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

            <DonationCard
                name={"Rafael Rodriguez"}
                status={"pending"}
            />
            <DonationCard
                name={"Rafael Rodriguez"}
                status={"approval"}
            />
            <DonationCard
                name={"Rafael Rodriguez"}
                status={"pending"}
            />
            <DonationCard
                name={"Rafael Rodriguez"}
                status={"pending"}
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
