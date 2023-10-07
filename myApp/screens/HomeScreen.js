import React, { useEffect, useState } from "react";
import { getTask } from "../utils/api";
import TaskListData from "../components/taskList";
import Layout from "../styles/Layout";

const HomeScreen = () => {
  const [task, setTask] = useState([]);

  const Datostraidos = async () => {
    const data = await getTask();
    setTask(data);
  };

  useEffect(() => {
    Datostraidos();
  }, []);

  return (
    <Layout>
      <TaskListData task={task} />
    </Layout>
  );
};

export default HomeScreen;
