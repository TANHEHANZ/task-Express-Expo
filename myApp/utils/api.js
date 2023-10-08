// si queremos usar asyn y await debemos dividir el codigo de forma que tengamos la peticion afuera
const API = "http://192.168.0.14:3000/task";

export const getTask = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const postTask = async (datos) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });
  return await res.json();
};

export const deletTask = async (id) => {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const uneTask = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};
export const updateTask = async (id, nuevaTarea) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo: nuevaTarea.titulo,
      descripcion: nuevaTarea.descripcion,
    }),
  });
  return res;
};
