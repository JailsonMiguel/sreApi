import { IUserProps } from "../../../interfaces/props/IUserProps";
import { UserModel } from "../../../models/userModel";
import { IInsertUserRepository } from "./IInsertUserRepository";

export class SequelizeInsertUserRepository implements IInsertUserRepository {
  async create(user: IUserProps): Promise<IUserProps> {
    const createdUser = await UserModel.create({
      ...user,
      active: true,
    });
    return createdUser;
  }
}
