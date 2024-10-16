import { IPositionProps } from '../../interfaces/props/IPositionProps';
import { ISelectPositionRepository } from '../../interfaces/repositories/select/ISelectPositionInterface';
import { PositionModel } from '../../models/positionModel';

export class SequelizeSelectPositionRepository
  implements ISelectPositionRepository
{
  async getAllPositions(): Promise<IPositionProps[]> {
    const allPositions = await PositionModel.findAll({
      order: [
        ['isActive', 'DESC'],
        ['teamId', 'ASC'],
        ['subarea', 'ASC']
      ]
    });
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
  async getPositionByTeamId(teamId: number): Promise<IPositionProps[]> {
    const allPositions = await PositionModel.findAll({
      where: {
        teamId: teamId
      },
      order: [
        ['isActive', 'DESC'],
        ['subarea', 'ASC']
      ]
    });
    return allPositions;
  }
  async getPositionByCode(code: string): Promise<number | null> {
    const positionId = await PositionModel.findOne({
      where: {
        code: code
      }
    });
    if (positionId) {
      return positionId.id;
    } else {
      return null;
    }
  }
}
