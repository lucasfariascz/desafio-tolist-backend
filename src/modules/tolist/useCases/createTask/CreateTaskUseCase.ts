import { inject, injectable } from "tsyringe";

import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { ITasksRepository } from "../../repositories/ITasksRepository";

import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateTaskUseCase {
  constructor(
    @inject("TasksRepository")
    private taskRepository: ITasksRepository
  ) {}

  async execute({ description, email, person_in_change }: ICreateTaskDTO): Promise<void> {

    const taskAlreadyExists = await this.taskRepository.findByEmail(email);

    if (taskAlreadyExists) {
      throw new AppError("Email already exists!");
    }


    await this.taskRepository.create({
      description,
      email,
      person_in_change
    });
  }
}

export { CreateTaskUseCase };
