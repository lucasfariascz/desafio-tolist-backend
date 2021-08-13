import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateTaskController } from "../modules/tolist/useCases/createTask/CreateTaskController";
import { ListTasksController } from "../modules/tolist/useCases/listTasks/ListTasksController";
import { UpdateTaskController } from "../modules/tolist/useCases/updateTask/UpdateTaskController";

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();
const updateTaskController = new UpdateTaskController();

tasksRoutes.use(ensureAuthenticated);

tasksRoutes.post("/", createTaskController.handle);
tasksRoutes.get("/list", listTasksController.handle);
tasksRoutes.put("/update/:id", updateTaskController.handle);

export { tasksRoutes };
