import express from "express";

import { tasksRoutes } from "./tasks.routes";
import { usersRoutes } from "./users.routes";

const routes = express();

routes.use("/tasks", tasksRoutes);

routes.use("/users", usersRoutes);

export { routes };
