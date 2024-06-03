import { IRegionalProps } from '../../../interfaces/props/IRegionalProps';
import { InstituteModel } from '../../../models/instituteModel';
import { OccupationModel } from '../../../models/occupationModel';
import { PositionModel } from '../../../models/positionModel';
import { RegionalModel } from '../../../models/regionalModel';
import { ServantModel } from '../../../models/servantModel';
import { ISelectRegionalRepository } from './ISelectRegionalInterface';

export class SequelizeSelectRegionalRepository
  implements ISelectRegionalRepository
{
  async getAllRegionals(): Promise<IRegionalProps[]> {
    const allRegionals = await RegionalModel.findAll({
      include: [
        {
          model: InstituteModel,
          as: 'institute'
        }
      ]
    });
    return allRegionals;
  }
  async getAllRegionalsAndSuperintendents(): Promise<IRegionalProps[]> {
    const allRegionals = await RegionalModel.findAll({
      include: [
        {
          model: InstituteModel,
          as: 'institute',
          include: [
            {
              required: false,
              model: OccupationModel,
              as: 'occupation',
              where: {
                isActive: true
              },
              include: [
                {
                  model: ServantModel,
                  as: 'servant'
                },
                {
                  model: PositionModel,
                  as: 'position'
                }
              ]
            }
          ]
        }
      ],
      order: [
        ['isActive', 'DESC'],
        ['id', 'ASC']
      ]
    });
    return allRegionals;
  }
  async verifyIfAlredyByInstitute(regional: IRegionalProps): Promise<boolean> {
    const existsRegional = await RegionalModel.findOne({
      where: {
        instituteId: regional.instituteId
      }
    });
    if (existsRegional) {
      return true;
    } else {
      return false;
    }
  }
}
