import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import TaskForm from "./screens/TaskForm";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "./styles/globalStyles";
import Srollviwer from "./screens/Srollviwer";

const Stack = createNativeStackNavigator();
//Yokoi Kenji conferencias
//diganle karina
// Otra noche
// por mil noches
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "App de Tareas",
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { color: colors.width },
            headerRight: () => {
              return (
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    onPress={() => (
                      navigation.navigate("TaskFormScrean"),
                      console.log("precionado")
                    )}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        marginHorizontal: 10,
                        marginHorizontal: 10,
                        padding: 10,
                      }}
                    >
                      Agregar
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Srollviwer")}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        marginHorizontal: 10,
                        padding: 10,
                      }}
                    >
                      Sroll
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            },
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
        <Stack.Screen
          name="Srollviwer"
          component={Srollviwer}
          options={{
            title: "SrollAlaDerecha",
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
