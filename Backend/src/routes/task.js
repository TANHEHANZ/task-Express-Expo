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

/**
 * @swagger
 * /task:
 * get:
 * summary: get all task
 */

router.get("/task", getTasks);
/**
 * @swagger
 * /task:
 * get:
 * summary: get count task
 */

router.get("/task/count", constTask);
/**
 * @swagger
 * /task:
 * get:
 * summary: get une task  for id
 */

router.get("/task/:id", getTask);
/**
 * @swagger
 * /task:
 * post:
 * summary: get create task
 */

router.post("/task", createTask);
/**
 * @swagger
 * /task:
 * delete:
 * summary: delete task for id
 */

router.delete("/task/:id", deleteTask);
/**
 * @swagger
 * /task:
 * put:
 * summary: edit task for id
 */

router.put("/task/:id", updateTask);

export default router;
