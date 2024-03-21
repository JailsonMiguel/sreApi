import { IPositionProps } from '../../../interfaces/props/IPositionProps';
import { PositionModel } from '../../../models/positionModel';
import { IInsertPositionRepository } from './IInsertPositionRepository';

export class SequelizeInsertPositionRepository
  implements IInsertPositionRepository
{
  async createPosition(position: IPositionProps): Promise<IPositionProps> {
    const createdPosition = await PositionModel.create({
      ...position,
      active: true
    });
    return createdPosition;
  }
}
