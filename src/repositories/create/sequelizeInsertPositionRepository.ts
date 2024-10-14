import { IPositionProps } from "../../interfaces/props/IPositionProps";
import { IInsertPositionRepository } from "../../interfaces/repositories/create/IInsertPositionRepository";
import { PositionModel } from "../../models/positionModel";

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
