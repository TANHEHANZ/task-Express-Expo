import { Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../styles/Layout";
import { Botones, InputForm } from "../styles/globalStyles";
import { postTask, uneTask, updateTask } from "../utils/api";

const TaskForm = ({ navigation, route }) => {
  const [datos, setDatos] = useState({
    titulo: "",
    descripcion: "",
  });

  const [editar, setEditar] = useState(false);

  const refreshState = (name, value) => {
    // actualizamos los datos con los parametros que le mandemos al estado
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (!editar === true) {
        await postTask(datos);
      } else {
        console.log(datos);

        await updateTask(route.params.id, datos);
      }
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({
        headerTitle: "Editar Tarea",
      });
      (async () => {
        const task = await uneTask(route.params.id);
        setDatos({ titulo: task.titulo, descripcion: task.descripcion });
        setEditar(true);
      })();
    }
  }, []);

  return (
    <Layout>
      <TextInput
        style={InputForm.inputF}
        placeholderTextColor={"#fff5"}
        placeholder="Escribe el titulo"
        value={datos.titulo}
        onChangeText={(text) => refreshState("titulo", text)}
      />
      <TextInput
        style={InputForm.inputF}
        value={datos.descripcion}
        placeholderTextColor={"#fff5"}
        placeholder="Escribe la descripcion"
        onChangeText={(text) => refreshState("descripcion", text)}
      />
      {!editar ? (
        <TouchableOpacity
          style={{ width: "50%", justifyContent: "center", marginVertical: 50 }}
        >
          <Text style={Botones.buttons} onPress={handleSubmit}>
            Agregar
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{ width: "50%", justifyContent: "center", marginVertical: 50 }}
        >
          <Text style={Botones.buttons3} onPress={handleSubmit}>
            editar
          </Text>
        </TouchableOpacity>
      )}
    </Layout>
  );
};

export default TaskForm;
