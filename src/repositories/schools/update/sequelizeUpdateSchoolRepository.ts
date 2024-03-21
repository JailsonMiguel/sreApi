import { IUpdateSchoolInterface } from '../../../interfaces/updatesInterfaces/IUpdateSchoolInterface';
import { SchoolModel } from '../../../models/schoolModel';
import { IUpdateSchoolRepository } from './IUpdateSchoolInterfaceRepository';

export class SequelizeUpdateSchoolRepository
  implements IUpdateSchoolRepository
{
  async updateSchool(
    schoolData: IUpdateSchoolInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await SchoolModel.update(
      {
        ...schoolData
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
