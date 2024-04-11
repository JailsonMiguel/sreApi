import { IPositionProps } from '../../../interfaces/props/IPositionProps';
import { PositionModel } from '../../../models/positionModel';
import { ISelectPositionRepository } from './ISelectPositionInterface';

export class SequelizeSelectPositionRepository
  implements ISelectPositionRepository
{
  async getAllPositions(): Promise<IPositionProps[]> {
    const allPositions = await PositionModel.findAll();
    return allPositions;
  }

  async verifyIfAlredyByName(position: IPositionProps): Promise<boolean> {
    const existsPosition = await PositionModel.findOne({
      where: {
        name: position.name
      }
    });
    if (existsPosition) {
      return true;
    } else {
      return false;
    }
  }
  async getPositionByName(name: string): Promise<IPositionProps[]> {
    const allPositions = await PositionModel.findAll({
      where: {
        name: name,
      }
    });
    return allPositions;
  }
}
