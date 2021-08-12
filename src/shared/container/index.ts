import { container } from "tsyringe";

import { TasksRepository } from "../../modules/tolist/repositories/implementations/TasksRepository";
import { ITasksRepository } from "../../modules/tolist/repositories/ITasksRepository";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";



container.registerSingleton<ITasksRepository>(
  "TasksRepository",
  TasksRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
