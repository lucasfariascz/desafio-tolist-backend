import { Router } from "express";

import { CreateTaskController } from "../modules/tolist/useCases/createTask/CreateTaskController";
import { ListTasksController } from "../modules/tolist/useCases/listTasks/ListTasksController";

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();

tasksRoutes.post("/", createTaskController.handle);
tasksRoutes.get("/list", listTasksController.handle);

export { tasksRoutes };
