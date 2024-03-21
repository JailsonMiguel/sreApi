import { IRegionalProps } from '../../../interfaces/props/IRegionalProps';
import { RegionalModel } from '../../../models/regionalModel';
import { IInsertRegionalRepository } from './IInsertRegionalRepository';

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
