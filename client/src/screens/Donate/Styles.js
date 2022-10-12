import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: "#FFF",
      position: "absolute",
      flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 45,
        paddingTop: 20,
        paddingBottom: 30
      },
      field: {
        marginBottom: 22,
      },
      titulo: {
        fontSize: 20,
        marginBottom: 4,
      },
      circle: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: "#FF9900",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2.5,
        elevation: 3,
      },
      savebtn: {
        position: "absolute",
        marginTop: 10,
        bottom: 29.5,
        right: 25.5,
        height: 40,
        width: 110,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: "#FF9900",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      },
      btntext: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
      },
});