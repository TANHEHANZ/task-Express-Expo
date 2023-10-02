import express from "express";
import tasksRoutes from "./routes/task";
import cors from "cors";
import morgan from "morgan";
import swaggerJSdoc from "swagger-jsdoc";
import swaggerIU from "swagger-ui-express";
import { options } from "./swaggerOptions";

const specs = swaggerJSdoc(options);
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(tasksRoutes);

app.use("/docs", swaggerIU.serve, swaggerIU.setup(specs));

export default app;
