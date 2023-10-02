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

export default router;
