import { Task } from "../entities/Task";

import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";
import { IUpdateTaskDTO } from "../dtos/IUpdateTaskDTO";

interface ITasksRepository {
  create(data: ICreateTaskDTO): Promise<void>;
  findByEmail(email: string): Promise<Task>;
  findById(id: string): Promise<Task>;
  update(id: string, { status_task }: IUpdateTaskDTO): Promise<void>;
  list(): Promise<Task[]>;
}

export { ITasksRepository };
