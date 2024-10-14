import { IConsultantProps } from '../../interfaces/props/IConsultantProps';
import { ISelectConsultantRepository } from '../../interfaces/repositories/select/ISelectConsultantInterface';
import { ConsultantModel } from '../../models/consultantModel';

export class SequelizeSelectConsultantRepository
  implements ISelectConsultantRepository
{
  async getAllConsultants(): Promise<IConsultantProps[]> {
    const allConsultants = await ConsultantModel.findAll({
      order: [
        ['isActive', 'DESC'],
        ['description', 'ASC']
      ]
    });
    return allConsultants;
  }

  async verifyIfAlredyByDescription(
    consultant: IConsultantProps
  ): Promise<boolean> {
    const existsConsultant = await ConsultantModel.findOne({
      where: {
        description: consultant.description
      }
    });
    if (existsConsultant) {
      return true;
    } else {
      return false;
    }
  }
}
