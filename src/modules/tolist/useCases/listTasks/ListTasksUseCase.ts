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

    //criar regra para lista atividade concluidas e pendentes e todas

    return tasks;
  }
}

export { ListTasksUseCase };
