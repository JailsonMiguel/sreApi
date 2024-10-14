import { IConsultantProps } from "../../interfaces/props/IConsultantProps";
import { IInsertConsultantRepository } from "../../interfaces/repositories/create/IInsertConsultantRepository";
import { ConsultantModel } from "../../models/consultantModel";

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
