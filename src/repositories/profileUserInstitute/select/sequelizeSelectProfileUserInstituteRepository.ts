import { IProfileUserInstituteProps } from '../../../interfaces/props/IProfileUserInstituteProps';
import { InstituteModel } from '../../../models/instituteModel';
import { ProfileModel } from '../../../models/profileModel';
import { ProfileUserInstituteModel } from '../../../models/profileUserInstituteModel';
import { UserModel } from '../../../models/userModel';
import { ISelectProfileUserInstituteRepository } from './ISelectProfileUserInstituteInterface';

export class SequelizeSelectProfileUserInstituteRepository
  implements ISelectProfileUserInstituteRepository
{
  async getAllProfileByInstitute(
    instituteId: number
  ): Promise<IProfileUserInstituteProps[]> {
    const allProfilesUsersInstitutes = await ProfileUserInstituteModel.findAll({
      where: {
        instituteId: instituteId
      }
    });
    return allProfilesUsersInstitutes;
  }

  async getAllProfileByUser(
    userId: number
  ): Promise<IProfileUserInstituteProps[]> {
    const allProfilesUsersInstitutes = await ProfileUserInstituteModel.findAll({
      where: {
        userId: userId
      }
    });
    return allProfilesUsersInstitutes;
  }

  async verifyIfAlredyByProfileUserInstitute(
    profileUserInstitute: IProfileUserInstituteProps
  ): Promise<boolean> {
    const existsProfileUserInstitute = await ProfileUserInstituteModel.findOne({
      where: {
        userId: profileUserInstitute.userId,
        instituteId: profileUserInstitute.instituteId
      }
    });
    if (existsProfileUserInstitute) {
      return true;
    } else {
      return false;
    }
  }

  async getAllProfileUserInstitute(): Promise<IProfileUserInstituteProps[]> {
    const allProfilesUsersInstitutes = await ProfileUserInstituteModel.findAll({
      include: [
        {
          model: ProfileModel,
          as: 'profile'
        },
        {
          model: InstituteModel,
          as: 'institute'
        },
        {
          model: UserModel,
          as: 'user'
        }
      ]
    });
    return allProfilesUsersInstitutes;
  }
}
