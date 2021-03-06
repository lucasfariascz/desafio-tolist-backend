import { ITasksRepository } from "../ITasksRepository";

import { Task } from "../../entities/Task";

import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { getRepository, Repository } from "typeorm";
import { IUpdateTaskDTO } from "../../dtos/IUpdateTaskDTO";

class TasksRepository implements ITasksRepository {

  private repository: Repository<Task>;

  constructor(){
    this.repository = getRepository(Task);
  }

  async create({ description, person_in_change, email, status_task }: ICreateTaskDTO): Promise<void> {
    const task = this.repository.create({
      description,
      person_in_change,
      email,
      status_task
    });

    await this.repository.save(task);
  }

  async findByEmail(email: string): Promise<Task> {
    const task = await this.repository.findOne({ email });
    return task;
  }

  async findById(id: string): Promise<Task> {
    const task = await this.repository.findOne(id);
    return task;
  }

  async update(id: string, { status_task }: IUpdateTaskDTO): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({ status_task })
      .where("id = :id")
      .setParameters({ id })
      .execute();
  }

  async list(): Promise<Task[]> {
    const tasks = await this.repository.find();
    return tasks;
  }
}

export { TasksRepository }
