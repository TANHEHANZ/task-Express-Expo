import React, { useEffect, useState } from "react";
import { getTask } from "../utils/api";
import TaskListData from "../components/taskList";
import Layout from "../styles/Layout";

const HomeScreen = () => (
  <Layout>
    <TaskListData />
  </Layout>
);

export default HomeScreen;
