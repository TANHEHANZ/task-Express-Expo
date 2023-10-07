import { FlatList } from "react-native";
import React from "react";
import TaskItem from "./TaskItem";

const TaskListData = ({ task }) => {
  const RenderTask = ({ item }) => {
    return <TaskItem item={item} />;
  };

  return (
    <FlatList
      style={{ width: "90%" }}
      data={task}
      keyExtractor={(item) => item.id + ""}
      renderItem={RenderTask}
    />
  );
};

export default TaskListData;
