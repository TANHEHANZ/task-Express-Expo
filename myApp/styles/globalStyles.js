import { StyleSheet } from "react-native";

export const colors = {
  primary: "#127369",
  secondary: "#10403B",
  complement: "#8AA6A3",
  tertiary: "#4C5958",
  quaternary: "#BFBFBF",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.quaternary,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.quaternary,
    fontFamily: "Helvetica",
    fontSize: 16,
  },
});
export const TaskContaner = StyleSheet.create({
  tareaContainer: {
    width: "100%",
    backgroundColor: colors.tertiary,
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
