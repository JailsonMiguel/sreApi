import { IUpdateOccupationInterface } from '../../../interfaces/updatesInterfaces/IUpdateOccupationInterface';
import { OccupationModel } from '../../../models/occupationModel';
import { IUpdateOccupationRepository } from './IUpdateOccupationInterfaceRepository';

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
