import { ISchoolProps } from '../../../interfaces/props/ISchoolProps';
import { InstituteModel } from '../../../models/instituteModel';
import { RegionalModel } from '../../../models/regionalModel';
import { SchoolModel } from '../../../models/schoolModel';
import { ServantModel } from '../../../models/servantModel';
import { UserModel } from '../../../models/userModel';
import { ISelectSchoolRepository } from './ISelectSchoolInterface';

export class SequelizeSelectSchoolRepository
  implements ISelectSchoolRepository
{
  async getAllSchools(): Promise<ISchoolProps[]> {
    const allSchools = await SchoolModel.findAll({
      include: [
        {
          model: InstituteModel,
          as: 'institute'
        },
        {
          model: RegionalModel,
          as: 'regional',
          include: [
            {
              model: InstituteModel,
              as: 'institute'
            }
          ]
        }
      ]
    });
    return allSchools;
  }

  async verifyIfAlredyByInstitute(school: ISchoolProps): Promise<boolean> {
    const existsSchool = await SchoolModel.findOne({
      where: {
        instituteId: school.instituteId
      }
    });
    if (existsSchool) {
      return true;
    } else {
      return false;
    }
  }
}
