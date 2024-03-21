import { IProfileProps } from '../../../interfaces/props/IProfileProps';
import { ProfileModel } from '../../../models/profileModel';
import { IInsertProfileRepository } from './IInsertProfileRepository';

export class SequelizeInsertProfileRepository
  implements IInsertProfileRepository
{
  async create(profile: IProfileProps): Promise<IProfileProps> {
    const createdProfile = await ProfileModel.create({
      ...profile,
      active: true
    });
    return createdProfile;
  }
}
