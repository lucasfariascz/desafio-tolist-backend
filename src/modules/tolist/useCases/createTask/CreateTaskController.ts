import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {

  async handle(request: Request, response: Response): Promise<Response>{

    const { description, person_in_change, email } = request.body;

    const createTaskUseCase = container.resolve(CreateTaskUseCase);

    await createTaskUseCase.execute({ description, person_in_change, email });

    return response.status(201).send();
  }
}

export { CreateTaskController };
