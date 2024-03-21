import { IUserProps } from '../../../interfaces/props/IUserProps';
import { UserModel } from '../../../models/userModel';
import { ISelectUserRepository } from './ISelectUserInterface';

export class SequelizeSelectUserRepository implements ISelectUserRepository {
  async getAllUsers(): Promise<IUserProps[]> {
    const allUsers = await UserModel.findAll();
    return allUsers;
  }

  async verifyIfAlredyByCpf(user: IUserProps): Promise<boolean> {
    const existsUser = await UserModel.findOne({
      where: {
        cpf: user.cpf
      }
    });
    if (existsUser) {
      return true;
    } else {
      return false;
    }
  }
}
