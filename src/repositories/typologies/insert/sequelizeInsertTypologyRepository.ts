import { ITypologyProps } from '../../../interfaces/props/ITypologyProps';
import { TypologyModel } from '../../../models/typologyModel';
import { IInsertTypologyRepository } from './IInsertTypologyRepository';

export class SequelizeInsertTypologyRepository
  implements IInsertTypologyRepository
{
  async createTypology(newTypology: ITypologyProps): Promise<ITypologyProps> {
    const createdTypology = await TypologyModel.create({
      ...newTypology,
      active: true
    });
    return createdTypology;
  }
}
