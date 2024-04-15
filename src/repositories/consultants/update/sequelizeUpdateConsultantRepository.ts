import { IUpdateConsultantInterface } from '../../../interfaces/updatesInterfaces/IUpdateConsultantInterface';
import { ConsultantModel } from '../../../models/consultantModel';
import { IUpdateConsultantRepository } from './IUpdateConsultantInterfaceRepository';

export class SequelizeUpdateConsultantRepository
  implements IUpdateConsultantRepository
{
  async updateConsultant(
    consultantData: IUpdateConsultantInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await ConsultantModel.update(
      {
        ...consultantData
      },
      {
        where: {
          id
        }
      }
    );
    if (updated[0] > 0) {
      return true;
    } else {
      return false;
    }
  }
}
