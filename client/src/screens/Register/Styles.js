import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  content: {
    flex: 1,
    padding: 36,
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
  },
});
