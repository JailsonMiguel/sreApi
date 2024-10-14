import { IUpdateSchoolRepository } from '../../interfaces/repositories/update/IUpdateSchoolInterfaceRepository';
import { IUpdateSchoolInterface } from '../../interfaces/updates/IUpdateSchoolInterface';
import { SchoolModel } from '../../models/schoolModel';

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
