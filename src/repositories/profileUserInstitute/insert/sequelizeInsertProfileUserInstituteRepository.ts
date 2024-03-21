import { IProfileUserInstituteProps } from '../../../interfaces/props/IProfileUserInstituteProps';
import { ProfileUserInstituteModel } from '../../../models/profileUserInstituteModel';
import { IInsertProfileUserInstituteRepository } from './IInsertProfileUserInstituteRepository';

export class SequelizeInsertProfileUserInstituteRepository
  implements IInsertProfileUserInstituteRepository
{
  async createProfileUserInstitute(
    newProfileUserInstitute: IProfileUserInstituteProps
  ): Promise<IProfileUserInstituteProps> {
    const createdProfileUserInstitute = await ProfileUserInstituteModel.create({
      ...newProfileUserInstitute,
      active: true
    });
    return createdProfileUserInstitute;
  }
}
