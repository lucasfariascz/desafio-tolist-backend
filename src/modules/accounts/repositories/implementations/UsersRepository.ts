import { IUsersRepository } from "../IUsersRepository";

import { User } from "../../entities/User";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";

class UsersRepository implements IUsersRepository {

  private repository: Repository<User>;

  constructor(){
    this.repository = getRepository(User);
  }

  async create({ name, email }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email
    });

     await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UsersRepository };
