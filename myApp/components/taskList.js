import { FlatList, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { deletTask, getTask } from "../utils/api";
import { colors } from "../styles/globalStyles";

const TaskListData = () => {
  const [task, setTask] = useState([]);
  const [estadoRefreshing, setEstadoRefreshing] = useState(false);
  const Datostraidos = async () => {
    const data = await getTask();
    setTask(data);
  };
  useEffect(() => {
    Datostraidos();
  }, []);
  const RefreshControlado = React.useCallback(async () => {
    setEstadoRefreshing(true);
    await Datostraidos();
    setEstadoRefreshing(false);
  });

  const deleteTask = async (id) => {
    await deletTask(id);
    await Datostraidos();
  };
  const RenderTask = ({ item }) => {
    return <TaskItem item={item} deleteTask={deleteTask} />;
  };

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={estadoRefreshing}
          onRefresh={RefreshControlado}
          colors={["#fff"]}
          progressBackgroundColor="#000"
        />
      }
      style={{ width: "90%" }}
      data={task}
      keyExtractor={(item) => item.id + ""}
      renderItem={RenderTask}
    />
  );
};

export default TaskListData;
