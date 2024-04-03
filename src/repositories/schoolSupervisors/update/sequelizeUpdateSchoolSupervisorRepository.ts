import { IUpdateSchoolSupervisorInterface } from '../../../interfaces/updatesInterfaces/IUpdateSchoolSupervisorInterface';
import { SchoolSupervisorModel } from '../../../models/schoolSupervisorModel';
import { IUpdateSchoolSupervisorRepository } from './IUpdateSchoolSupervisorInterfaceRepository';

export class SequelizeUpdateSchoolSupervisorRepository
  implements IUpdateSchoolSupervisorRepository
{
  async updateSchoolSupervisor(
    schoolSupervisorData: IUpdateSchoolSupervisorInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await SchoolSupervisorModel.update(
      {
        ...schoolSupervisorData
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
