import { IUpdateSuperintendentInterface } from '../../../interfaces/updatesInterfaces/IUpdateSuperintendentInterface';
import { SuperintendentModel } from '../../../models/superintendentModel';
import { IUpdateSuperintendentRepository } from './IUpdateSuperintendentInterfaceRepository';

export class SequelizeUpdateSuperintendentRepository
  implements IUpdateSuperintendentRepository
{
  async updateSuperintendent(
    superintendentData: IUpdateSuperintendentInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await SuperintendentModel.update(
      {
        ...superintendentData
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
