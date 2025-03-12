import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#E6CCFF",
    paddingHorizontal: 20,
    flexDirection: "column",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
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
});
