import { inject, injectable } from "tsyringe";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
class ListTasksUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository
  ){}

  async execute({ status_task_query }): Promise<Task[]> {
    console.log(status_task_query);
    const tasks = this.tasksRepository.list();
    //criar regra para lista atividade concluidas e pendentes e todas
    const task_filter = (await tasks).filter((task) => {
      if (task.status_task === status_task_query) {
        return task.status_task === status_task_query;
      }else if (status_task_query === undefined) {
        return task;
      }
    });
    return task_filter;
  }
}

export { ListTasksUseCase };
