import { ITypologyProps } from '../../interfaces/props/ITypologyProps';
import { ISelectTypologyRepository } from '../../interfaces/repositories/select/ISelectTypologyInterface';
import { InstituteModel } from '../../models/instituteModel';
import { PositionModel } from '../../models/positionModel';
import { RegionalModel } from '../../models/regionalModel';
import { TypologyModel } from '../../models/typologyModel';

export class SequelizeSelectTypologyRepository
  implements ISelectTypologyRepository
{
  async getAllActiveByRegional(instituteId: number) {
    const allTypologies = await TypologyModel.findAll({
      where: {
        instituteId: instituteId,
        isActive: true
      }
    });
    return allTypologies;
  }

  async getAllTypologies(): Promise<ITypologyProps[]> {
    const allTypologies = await TypologyModel.findAll({
      include: [
        {
          model: PositionModel,
          as: 'position'
        },
        {
          model: InstituteModel,
          as: 'institute',
          include: [
            {
              model: RegionalModel,
              as: 'regional'
            }
          ]
        }
      ],
      order: [
        ['isActive', 'DESC'],
        ['id', 'DESC']
      ]
    });
    return allTypologies;
  }

  async verifyIfAlredyActiveByPositionAndRegional(
    typology: ITypologyProps
  ): Promise<boolean> {
    const existsTypology = await TypologyModel.findOne({
      where: {
        instituteId: typology.instituteId,
        positionId: typology.positionId,
        isActive: true
      }
    });
    if (existsTypology) {
      return true;
    } else {
      return false;
    }
  }
  async getAllTypologyByRegionalAndPosition(
    instituteId: number,
    positionId: number
  ): Promise<ITypologyProps[]> {
    const getAllTypologies = await TypologyModel.findAll({
      where: {
        instituteId: instituteId,
        positionId: positionId
      },
      include: [
        {
          model: PositionModel,
          as: 'position'
        },
        {
          model: InstituteModel,
          as: 'institute',
          include: [
            {
              model: RegionalModel,
              as: 'regional'
            }
          ]
        }
      ],
      order: [
        ['isActive', 'DESC'],
        ['id', 'DESC']
      ]
    });
    return getAllTypologies;
  }
  async getActiveByRegionalAndPosition(
    instituteId: number,
    positionId: number
  ): Promise<ITypologyProps> {
    const getAllTypologies = await TypologyModel.findOne({
      where: {
        instituteId: instituteId,
        positionId: positionId,
        isActive: true
      }
    });
    return getAllTypologies;
  }
}
