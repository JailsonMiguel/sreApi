import { ITypologyProps } from '../../interfaces/props/ITypologyProps';
import { IInsertTypologyRepository } from '../../interfaces/repositories/create/IInsertTypologyRepository';
import { TypologyModel } from '../../models/typologyModel';

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
