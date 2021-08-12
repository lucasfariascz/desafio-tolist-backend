import { Task } from "../entities/Task";
import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";

interface ITasksRepository {
  create(data: ICreateTaskDTO): Promise<void>;
  findByEmail(email: string): Promise<Task>;
}

export { ITasksRepository };
