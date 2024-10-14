import { IUpdatePositionRepository } from '../../interfaces/repositories/update/IUpdatePositionInterfaceRepository';
import { IUpdatePositionInterface } from '../../interfaces/updates/IUpdatePositionInterface';
import { PositionModel } from '../../models/positionModel';

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
