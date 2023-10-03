import { Router } from "express";
import {
  constTask,
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controller/task";

const router = Router();

router.get("/task", getTasks);

router.get("/task/count", constTask);

router.get("/task/:id", getTask);

router.post("/task", createTask);

router.delete("/task/:id", deleteTask);

router.put("/task/:id", updateTask);

export default router;
