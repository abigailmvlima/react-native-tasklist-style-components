// src/views/LoginScreen/styles.ts
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6CCFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4B0082",
  },
  input: {
    width: "80%",
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
  },
  buttonText: { color: "#FFFFFF", fontSize: 16, textAlign: "center" },
  backButton: {
    alignSelf: "flex-start",
    padding: 25,
  },
});
