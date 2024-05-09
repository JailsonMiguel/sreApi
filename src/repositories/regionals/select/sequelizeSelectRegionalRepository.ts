import { IRegionalProps } from '../../../interfaces/props/IRegionalProps';
import { InstituteModel } from '../../../models/instituteModel';
import { RegionalModel } from '../../../models/regionalModel';
import { SuperintendentModel } from '../../../models/superintendentModel';
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
        },
        {
          model: SuperintendentModel,
          as: 'superintendent'
        }
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
