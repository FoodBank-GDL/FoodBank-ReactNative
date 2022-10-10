import {
    View,
    Text,
    StyleSheet
} from "react-native";
import DonationCard from "./DonationCard";

const DonationsComponent = ({ }) => {

    return (
        <View style={Styles.container}>
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
        backgroundColor: "white"
    }
})

export default DonationsComponent
