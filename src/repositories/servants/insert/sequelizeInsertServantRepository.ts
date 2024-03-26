import { IServantProps } from '../../../interfaces/props/IServantProps';
import { ServantModel } from '../../../models/servantModel';
import { IInsertServantRepository } from './IInsertServantRepository';

export class SequelizeInsertServantRepository
  implements IInsertServantRepository
{
  async createServant(newServant: IServantProps): Promise<IServantProps> {
    const createdServant = await ServantModel.create({
      ...newServant,
      active: true
    });
    return createdServant;
  }
}
