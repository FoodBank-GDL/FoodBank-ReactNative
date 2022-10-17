import { StatusBar } from "../../components";
import { View } from "react-native";
import { Button } from "../../components";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
    const { logout } = useAuth();
    const handleLogOut = () => {
        logout();
    };
    return (
        <View>
            <StatusBar />
            <Button text={"Cerrar sesión"} handlePress={handleLogOut} />
        </View>
    );
};

export default Profile;
