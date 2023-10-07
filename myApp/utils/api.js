// si queremos usar asyn y await debemos dividir el codigo de forma que tengamos la peticion afuera
const API = "http://192.168.0.17:3000/task";

export const getTask = async () => {
  const res = await fetch(API);
  return await res.json();
};
