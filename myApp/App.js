import React from "react";
import { Text, TouchableOpacity } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import TaskForm from "./screens/TaskForm";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "./styles/globalStyles";

const Stack = createNativeStackNavigator();
//Yokoi Kenji conferencias
//diganle karina
// Otra noche
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Aplicacion de Tareas",
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { color: colors.width },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => (
                  navigation.navigate("TaskFormScrean"),
                  console.log("precionado")
                )}
              >
                <Text style={{ color: "#fff" }}>Agregar</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="TaskFormScrean"
          component={TaskForm}
          options={{
            title: "Crear nueva Tarea",
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { color: colors.width },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
