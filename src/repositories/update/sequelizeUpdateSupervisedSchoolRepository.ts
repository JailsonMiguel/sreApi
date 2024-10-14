import { IUpdateSupervisedSchoolRepository } from '../../interfaces/repositories/update/IUpdateSupervisedSchoolInterfaceRepository';
import { IUpdateSupervisedSchoolInterface } from '../../interfaces/updates/IUpdateSupervisedSchoolInterface';
import { SupervisedSchoolModel } from '../../models/supervisedSchoolModel';

export class SequelizeUpdateSupervisedSchoolRepository
  implements IUpdateSupervisedSchoolRepository
{
  async updateSupervisedSchool(
    supervisedSchoolData: IUpdateSupervisedSchoolInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await SupervisedSchoolModel.update(
      {
        ...supervisedSchoolData
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
