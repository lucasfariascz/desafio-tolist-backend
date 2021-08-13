import { inject, injectable } from "tsyringe";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
class ListTasksUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository
  ){}

  execute(): Promise<Task[]> {
    const tasks = this.tasksRepository.list();

    return tasks;
  }
}

export { ListTasksUseCase };
