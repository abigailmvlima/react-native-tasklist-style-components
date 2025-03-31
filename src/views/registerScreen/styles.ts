import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#88d0e07b",
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0d424e",
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 8,
    color: "#2d9bb3",
  },
  button: {
    backgroundColor: "#0d424e",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "transparent",
    padding: 10,
  },
  arrowBack: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
});
