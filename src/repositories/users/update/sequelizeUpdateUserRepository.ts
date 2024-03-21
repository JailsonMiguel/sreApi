import { IUpdateUserInterface } from '../../../interfaces/updatesInterfaces/IUpdateUserInterface';
import { UserModel } from '../../../models/userModel';
import { IUpdateUserRepository } from './IUpdateUserInterfaceRepository';

export class SequelizeUpdateUserRepository implements IUpdateUserRepository {
  async updateUser(
    userData: IUpdateUserInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await UserModel.update(
      {
        ...userData
      },
      {
        where: {
          id
        }
      }
    );
    if (updated[0] > 0) {
      return true;
    } else {
      return false;
    }
  }
}
