import { IUpdateConsultantRepository } from '../../interfaces/repositories/update/IUpdateConsultantInterfaceRepository';
import { IUpdateConsultantInterface } from '../../interfaces/updates/IUpdateConsultantInterface';
import { ConsultantModel } from '../../models/consultantModel';

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
