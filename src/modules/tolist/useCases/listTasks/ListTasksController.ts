import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTasksUseCase } from "./ListTasksUseCase";

class ListTasksController {

  async handle(request: Request, response: Response): Promise<Response>{

    const { status_task_query } = request.query;

    const listTasksUseCase = container.resolve(ListTasksUseCase);
    const all = await listTasksUseCase.execute({ status_task_query });

    return response.json(all);
  }
}

export { ListTasksController };
