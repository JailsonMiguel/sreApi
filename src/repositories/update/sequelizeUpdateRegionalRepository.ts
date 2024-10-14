import { IUpdateRegionalRepository } from '../../interfaces/repositories/update/IUpdateRegionalInterfaceRepository';
import { IUpdateRegionalInterface } from '../../interfaces/updates/IUpdateRegionalInterface';
import { RegionalModel } from '../../models/regionalModel';

export class SequelizeUpdateRegionalRepository
  implements IUpdateRegionalRepository
{
  async updateRegional(
    regionalData: IUpdateRegionalInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await RegionalModel.update(
      {
        ...regionalData
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
