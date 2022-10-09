import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
    position: "absolute",
  },
  content: {
    flex: 1,
    padding: 36,
    paddingTop: 12,
  },
  image_logo: {
    width: "110%",
    height: 80,
    resizeMode: "contain",
    marginTop: 48,
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
  button: {
    marginHorizontal: 15,
    paddingTop: 24,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    width: "100%",
    height: "10%",
    backgroundColor: "#FF9900",
    bottom: 0,
  },
});
