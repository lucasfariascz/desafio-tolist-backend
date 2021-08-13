import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

export async function ensureAuthenticated(request: Request, reponse: Response, next: NextFunction){
  try {
    const email = request.headers.email.toString();

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    next();
  } catch (error) {
    throw new AppError("Invalid user", 401);
  }
}
