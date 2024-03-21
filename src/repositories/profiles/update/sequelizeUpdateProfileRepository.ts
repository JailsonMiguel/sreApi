import { IUpdateProfileInterface } from '../../../interfaces/updatesInterfaces/IUpdateProfileInterface';
import { ProfileModel } from '../../../models/profileModel';
import { IUpdateProfileRepository } from './IUpdateProfileInterfaceRepository';

export class SequelizeUpdateProfileRepository
  implements IUpdateProfileRepository
{
  async updateProfile(
    profileData: IUpdateProfileInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await ProfileModel.update(
      {
        ...profileData
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
