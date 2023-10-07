import { StyleSheet } from "react-native";

export const colors = {
  primary: "#127369",
  secondary: "#10403B",
  complement: "#8AA6A3",
  tertiary: "#4C5958",
  quaternary: "#272727",
  width: "#fff",
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
    width: "90%",
    color: colors.quaternary,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export const InputForm = StyleSheet.create({
  inputF: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    color: colors.primary,
  },
});

export const Botones = StyleSheet.create({
  buttons: {
    width: "100%",
    padding: 12,
    fontSize: 12,
    color: colors.width,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: colors.primary,
    color: colors.width,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 10,
        shadowColor: colors.quaternary, // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento
        shadowOpacity: 0.25, // Opacidad
        shadowRadius: 4, // Radio de la sombra
      },
    }),
  },
  buttons2: {
    width: "100%",
    padding: 12,
    fontSize: 12,
    color: colors.width,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "#ee5253",
    color: colors.width,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 10,
        shadowColor: colors.quaternary, // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento
        shadowOpacity: 0.25, // Opacidad
        shadowRadius: 4, // Radio de la sombra
      },
    }),
  },
  buttons3: {
    width: "100%",
    padding: 12,
    fontSize: 12,
    color: colors.width,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "#246bd6",
    color: colors.width,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 10,
        shadowColor: colors.quaternary, // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento
        shadowOpacity: 0.25, // Opacidad
        shadowRadius: 4, // Radio de la sombra
      },
    }),
  },
});
