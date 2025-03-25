import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#E6CCFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "column",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginVertical: 35,
  },
  arrow: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    display: "flex",
    fontSize: 24,
    fontWeight: "bold",
    color: "#4B0082",
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: "#4B0082",
  },
  loadingText: {
    fontSize: 16,
    color: "#4B0082",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    outline: "none",
  },
  addButton: {
    marginLeft: 10,
  },
  logoutButton: {
    position: "absolute",
    right: 16,
    top: 16,
  },
});
