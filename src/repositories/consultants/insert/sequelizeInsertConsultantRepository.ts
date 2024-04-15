import { IConsultantProps } from '../../../interfaces/props/IConsultantProps';
import { ConsultantModel } from '../../../models/consultantModel';
import { IInsertConsultantRepository } from './IInsertConsultantRepository';

export class SequelizeInsertConsultantRepository
  implements IInsertConsultantRepository
{
  async createConsultant(
    consultant: IConsultantProps
  ): Promise<IConsultantProps> {
    const createdConsultant = await ConsultantModel.create({
      ...consultant,
      active: true
    });
    return createdConsultant;
  }
}
