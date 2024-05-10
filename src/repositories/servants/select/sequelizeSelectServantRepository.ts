import { Model } from 'sequelize';
import { IServantProps } from '../../../interfaces/props/IServantProps';
import { ServantModel } from '../../../models/servantModel';
import { ISelectServantRepository } from './ISelectServantInterface';

export class SequelizeSelectServantRepository
  implements ISelectServantRepository
{
  async getAllServantActive(): Promise<IServantProps[]> {
    const allServants = await ServantModel.findAll({
      where: {
        isActive: true
      }
    });
    return allServants;
  }

  async getAllServant(): Promise<IServantProps[]> {
    const allServants = await ServantModel.findAll({});
    return allServants;
  }

  async verifyIfAlredyByUserRegional(servant: IServantProps): Promise<boolean> {
    const existsServant = await ServantModel.findOne({
      where: {
        cpf: servant.cpf
      }
    });
    if (existsServant) {
      return true;
    } else {
      return false;
    }
  }
}
