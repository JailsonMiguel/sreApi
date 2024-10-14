import { IUpdateOccupationInterface } from '../../interfaces/updates/IUpdateOccupationInterface';
import { OccupationModel } from '../../models/occupationModel';
import { IUpdateOccupationRepository } from '../../interfaces/repositories/update/IUpdateOccupationInterfaceRepository';

export class SequelizeUpdateOccupationRepository
  implements IUpdateOccupationRepository
{
  async updateOccupation(
    occupationData: IUpdateOccupationInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await OccupationModel.update(
      {
        ...occupationData
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
