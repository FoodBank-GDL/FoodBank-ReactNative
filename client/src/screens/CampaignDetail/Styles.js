import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%",
  },
  content: {
    padding: 24,
  },
  category_icons: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "500",
    fontSize: 32,
  },
  secondary: {
    margin: 0,
    padding: 0,
    color: "gray",
    fontSize: 12,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  button_donar: {
    width: "30%",
  },
  button_gestionar: {
    width: "60%",
  },
  bullet_point: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingVertical: 4,
  },
  icon: {
    paddingEnd: 8,
  },
  info: {
    fontSize: 12,
    paddingVertical: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
  },
});
