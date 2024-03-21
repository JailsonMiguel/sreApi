import { IUpdateRegionalInterface } from '../../../interfaces/updatesInterfaces/IUpdateRegionalInterface';
import { RegionalModel } from '../../../models/regionalModel';
import { IUpdateRegionalRepository } from './IUpdateRegionalInterfaceRepository';

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
