import express from "express";
import tasks from "./routes/task.routes.js";

const app = express();

app.use(express.json());

app.use("/", tasks);

app.listen(3000);

console.log("Server listening on port", 3000);
