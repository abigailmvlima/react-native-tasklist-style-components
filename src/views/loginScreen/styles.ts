// src/views/LoginScreen/styles.ts
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#88d0e07b",
    paddingTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 100,
    color: "#0d424e",
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 8,
    color: "#051d22",
  },
  button: {
    backgroundColor: "#0d4754",
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    width: "80%",
  },
  buttonText: { color: "#FFFFFF", fontSize: 16, textAlign: "center" },
  backButton: {
    alignSelf: "flex-start",
    padding: 25,
  },
  orText: {
    marginVertical: 20,
    fontSize: 16,
    color: "#0d4754",
    textAlign: "center",
  },
  linkText: {
    color: "#2e6697",
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
