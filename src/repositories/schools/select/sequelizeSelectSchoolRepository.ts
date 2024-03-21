import { ISchoolProps } from '../../../interfaces/props/ISchoolProps';
import { SchoolModel } from '../../../models/schoolModel';
import { ISelectSchoolRepository } from './ISelectSchoolInterface';

export class SequelizeSelectSchoolRepository
  implements ISelectSchoolRepository
{
  async getAllSchools(): Promise<ISchoolProps[]> {
    const allSchools = await SchoolModel.findAll();
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
