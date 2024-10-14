import { IUpdateServantRepository } from '../../interfaces/repositories/update/IUpdateServantInterfaceRepository';
import { IUpdateServantInterface } from '../../interfaces/updates/IUpdateServantInterface';
import { ServantModel } from '../../models/servantModel';

export class SequelizeUpdateServantRepository
  implements IUpdateServantRepository
{
  async updateServant(
    servantData: IUpdateServantInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await ServantModel.update(
      {
        ...servantData
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
