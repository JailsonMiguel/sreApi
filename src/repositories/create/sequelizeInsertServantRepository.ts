import { IServantProps } from '../../interfaces/props/IServantProps';
import { IInsertServantRepository } from '../../interfaces/repositories/create/IInsertServantRepository';
import { ServantModel } from '../../models/servantModel';

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
