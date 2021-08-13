import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";


class UpdateTaskController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { status_task } = request.body;
    console.log(request.body);
    const updateTaskUseCase = container.resolve(UpdateTaskUseCase);

    await updateTaskUseCase.execute(id, { status_task });

    return response.status(204).send();
  }
}

export { UpdateTaskController };
