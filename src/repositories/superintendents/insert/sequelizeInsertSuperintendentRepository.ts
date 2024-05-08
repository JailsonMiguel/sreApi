import { ISuperintendentProps } from '../../../interfaces/props/ISuperintendentProps';
import { SuperintendentModel } from '../../../models/superintendentModel';
import { IInsertSuperintendentRepository } from './IInsertSuperintendentRepository';

export class SequelizeInsertSuperintendentRepository
  implements IInsertSuperintendentRepository
{
  async createSuperintendent(
    newSuperintendent: ISuperintendentProps
  ): Promise<ISuperintendentProps> {
    const createdSuperintendent = await SuperintendentModel.create({
      ...newSuperintendent,
      active: true
    });
    return createdSuperintendent;
  }
}
