import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/task", async (req, res) => {
  const tareas = await prisma.Task.findMany();
  res.json(tareas);
});

router.post("/task", async (req, res) => {
  const newtarea = await prisma.Task.create({
    data: req.body,
  });
  res.json(newtarea);
});

router.put("/task/:id", async (req, res) => {
  const taskId = parseInt(req.params.id);

  try {
    const updatedTask = await prisma.Task.update({
      where: { id: taskId },
      data: req.body,
    });

    res.json(updatedTask);
  } catch (error) {
    console.error("Error al actualizar la tarea:", error);
    res.status(500).json({ error: "Error al actualizar la tarea" });
  }
});

router.delete("/task/:id", async (req, res) => {
  const deleteTarea = await prisma.Task.delete({
    where: { id: parseInt(req.params.id) },
  });
  if (!deleteTarea) return res.status(404).json({ error: "Task not found" });
  return res.json({ deleteTarea });
});

export default router;
