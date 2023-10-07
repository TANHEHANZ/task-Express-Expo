import { View, Text } from "react-native";
import React from "react";
import { TaskContaner, globalStyles } from "../styles/globalStyles";

const TaskItem = ({ item }) => {
  return (
    <View style={TaskContaner.tareaContainer}>
      <Text style={globalStyles.text}>{item.titulo}</Text>
      <Text style={globalStyles.text}>{item.descripcion}</Text>
    </View>
  );
};

export default TaskItem;
