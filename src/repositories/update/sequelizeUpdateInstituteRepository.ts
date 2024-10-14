import { IUpdateInstituteRepository } from '../../interfaces/repositories/update/IUpdateInstituteInterfaceRepository';
import { IUpdateInstituteInterface } from '../../interfaces/updates/IUpdateInstituteInterface';
import { InstituteModel } from '../../models/instituteModel';

export class SequelizeUpdateInstituteRepository
  implements IUpdateInstituteRepository
{
  async updateInstitute(
    instituteData: IUpdateInstituteInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await InstituteModel.update(
      {
        ...instituteData
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
