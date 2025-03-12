import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6CCFF",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4B0082",
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 8,
    color: "#4B0082",
  },
  button: {
    backgroundColor: "#4B0082",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
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
});
