import { ITypologyProps } from '../../../interfaces/props/ITypologyProps';
import { InstituteModel } from '../../../models/instituteModel';
import { PositionModel } from '../../../models/positionModel';
import { RegionalModel } from '../../../models/regionalModel';
import { TypologyModel } from '../../../models/tipologyModel';
import { ISelectTypologyRepository } from './ISelectTypologyInterface';

export class SequelizeSelectTypologyRepository
  implements ISelectTypologyRepository
{
  async getAllActiveByRegional(regionalId: number) {
    const allTypologies = await TypologyModel.findAll({
      where: {
        regionalId: regionalId,
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
          model: RegionalModel,
          as: 'regional',
          include: [
            {
              model: InstituteModel,
              as: 'institute'
            }
          ]
        }
      ],
      order: [
        ['isActive', 'DESC'],
        ['id', 'DESC'],
      ]
    });
    return allTypologies;
  }

  async verifyIfAlredyActiveByPositionAndRegional(
    typology: ITypologyProps
  ): Promise<boolean> {
    const existsTypology = await TypologyModel.findOne({
      where: {
        regionalId: typology.regionalId,
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
}
