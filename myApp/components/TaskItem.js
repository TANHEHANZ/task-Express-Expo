import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Botones, TaskContaner, globalStyles } from "../styles/globalStyles";

import { useNavigation } from "@react-navigation/native";

const TaskItem = ({ item, deleteTask }) => {
  const navigation = useNavigation();

  return (
    <View style={TaskContaner.tareaContainer}>
      <TouchableOpacity
        style={{ width: "60%" }}
        onPress={() => navigation.navigate("TaskFormScrean", { id: item.id })}
      >
        <Text style={globalStyles.text}>{item.titulo}</Text>
        <Text style={globalStyles.text}>{item.descripcion}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: "30%" }}>
        <Text
          style={Botones.buttons2}
          onPress={() => {
            deleteTask(item.id);
          }}
        >
          Eliminar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
