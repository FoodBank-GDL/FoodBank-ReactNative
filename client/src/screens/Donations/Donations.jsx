import { View, Text } from "react-native";
import DonationsContainer from "../../components/DonationsContainer";

const Donations = ({ route }) => {
  const campaignId = route.params;
  return <DonationsContainer campaignId={campaignId} />;
};

export default Donations;
