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

  async verifyIfAlredyBySubarea(position: IPositionProps): Promise<boolean> {
    const existsPosition = await PositionModel.findOne({
      where: {
        subarea: position.subarea
      }
    });
    if (existsPosition) {
      return true;
    } else {
      return false;
    }
  }

  async getPositionBySubarea(subarea: string): Promise<IPositionProps[]> {
    const allPositions = await PositionModel.findAll({
      where: {
        subarea: subarea
      }
    });
    return allPositions;
  }

  async getPositionBySector(sector: string): Promise<IPositionProps[]> {
    const allPositions = await PositionModel.findAll({
      where: {
        sector: sector
      }
    });
    return allPositions;
  }
}
