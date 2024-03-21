import { IRegionalProps } from '../../../interfaces/props/IRegionalProps';
import { RegionalModel } from '../../../models/regionalModel';
import { ISelectRegionalRepository } from './ISelectRegionalInterface';

export class SequelizeSelectRegionalRepository
  implements ISelectRegionalRepository
{
  async getAllRegionals(): Promise<IRegionalProps[]> {
    const allRegionals = await RegionalModel.findAll();
    return allRegionals;
  }

  async verifyIfAlredyByInstitute(regional: IRegionalProps): Promise<boolean> {
    const existsRegional = await RegionalModel.findOne({
      where: {
        name: regional.instituteId
      }
    });
    if (existsRegional) {
      return true;
    } else {
      return false;
    }
  }
}
