import React from "react";
import { Text, TouchableOpacity } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import TaskForm from "./screens/TaskForm";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "./styles/globalStyles";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { color: colors.quaternary },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => (
                  navigation.navigate("TaskFormScrean"),
                  console.log("precionado")
                )}
              >
                <Text>Agregar</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="TaskFormScrean" component={TaskForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
