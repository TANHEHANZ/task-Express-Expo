import { conection } from "../database";

export const getTasks = async (req, res) => {
  const db = await conection();
  const [rows] = await db.query("select * from tasks");
  res.json(rows);
};

export const getTask = async (req, res) => {
  const db = await conection();
  const [rows] = await db.query("select * from tasks where id = ?", [
    req.params.id,
  ]);
  res.json(rows[0]);
};

export const constTask = async (req, res) => {
  const db = await conection();
  const [rows] = await db.query("select count(*) from tasks");
  res.json(rows[0]["count(*)"]);
};

export const createTask = async (req, res) => {
  const db = await conection();
  const [resul] = await db.query(
    "INSERT INTO tasks (titulo, descripcion) values (?, ?)",
    [req.body.titulo, req.body.descripcion]
  );
  res.json({
    id: resul.insertId,
    ...req.body,
  });
};

export const updateTask = async (req, res) => {
  const db = await conection();
  // const [rows] = await db.query(
  //   "update tasks set titulo =?, descripcion =? where id =?",
  //   [req.body.titulo, req.body.descripcion, req.params.id]
  // );

  const [rows] = await db.query("update tasks set ? where id =?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const deleteTask = async (req, res) => {
  const db = await conection();
  const [rows] = await db.query("delete from tasks where id = ?", [
    req.params.id,
  ]);
  res.sendStatus(204);
};
