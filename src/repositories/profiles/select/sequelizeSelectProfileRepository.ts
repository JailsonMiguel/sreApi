import { IProfileProps } from '../../../interfaces/props/IProfileProps';
import { ProfileModel } from '../../../models/profileModel';
import { ISelectProfileRepository } from './ISelectProfileInterface';

export class SequelizeSelectProfileRepository
  implements ISelectProfileRepository
{
  async getAllProfiles(): Promise<IProfileProps[]> {
    const allProfiles = await ProfileModel.findAll();
    return allProfiles;
  }

  async verifyIfAlredyByName(profile: IProfileProps): Promise<boolean> {
    const existsProfile = await ProfileModel.findOne({
      where: {
        name: profile.name
      }
    });
    if (existsProfile) {
      return true;
    } else {
      return false;
    }
  }
}
