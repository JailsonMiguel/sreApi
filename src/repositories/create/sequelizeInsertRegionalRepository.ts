import { IRegionalProps } from '../../interfaces/props/IRegionalProps';
import { IInsertRegionalRepository } from '../../interfaces/repositories/create/IInsertRegionalRepository';
import { RegionalModel } from '../../models/regionalModel';

export class SequelizeInsertRegionalRepository
  implements IInsertRegionalRepository
{
  async createRegional(newRegional: IRegionalProps): Promise<IRegionalProps> {
    const createdRegional = await RegionalModel.create({
      ...newRegional,
      active: true
    });
    return createdRegional;
  }
}
