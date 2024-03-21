import { IUpdatePositionInterface } from '../../../interfaces/updatesInterfaces/IUpdatePositionInterface';
import { PositionModel } from '../../../models/positionModel';
import { IUpdatePositionRepository } from './IUpdatePositionInterfaceRepository';

export class SequelizeUpdatePositionRepository
  implements IUpdatePositionRepository
{
  async updatePosition(
    positionData: IUpdatePositionInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await PositionModel.update(
      {
        ...positionData
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
