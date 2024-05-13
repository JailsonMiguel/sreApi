import { IUpdateSupervisedSchoolInterface } from '../../../interfaces/updatesInterfaces/IUpdateSupervisedSchoolInterface';
import { SupervisedSchoolModel } from '../../../models/supervisedSchoolModel';
import { IUpdateSupervisedSchoolRepository } from './IUpdateSupervisedSchoolInterfaceRepository';

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
