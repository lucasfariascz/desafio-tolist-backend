import { ITasksRepository } from "../ITasksRepository";

import { Task } from "../../entities/Task";

import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { getRepository, Repository } from "typeorm";

class TasksRepository implements ITasksRepository {

  private repository: Repository<Task>;

  constructor(){
    this.repository = getRepository(Task);
  }

  async create({ description, person_in_change, email }: ICreateTaskDTO): Promise<void> {
    const task = this.repository.create({
      description,
      person_in_change,
      email
    });

    await this.repository.save(task);
  }

  async findByEmail(email: string): Promise<Task> {
    const user = await this.repository.findOne({ email });
    return user;
  }
}

export { TasksRepository }
