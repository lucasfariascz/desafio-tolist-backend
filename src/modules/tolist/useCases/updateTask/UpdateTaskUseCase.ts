import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUpdateTaskDTO } from "../../dtos/IUpdateTaskDTO";


import { ITasksRepository } from "../../repositories/ITasksRepository";


@injectable()
class UpdateTaskUseCase {
  constructor(
    @inject("TasksRepository")
    private taskRepository: ITasksRepository
  ) {}

  async execute(id: string, { status_task }: IUpdateTaskDTO): Promise<void>{
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new AppError("Task not exist!");
    }

    await this.taskRepository.update(id, { status_task });
  }
}

export { UpdateTaskUseCase };
