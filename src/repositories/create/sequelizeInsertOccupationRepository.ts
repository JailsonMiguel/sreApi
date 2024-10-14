import { IOccupationProps } from '../../interfaces/props/IOccupationProps';
import { IInsertOccupationRepository } from '../../interfaces/repositories/create/IInsertOccupationRepository';
import { OccupationModel } from '../../models/occupationModel';

export class SequelizeInsertOccupationRepository
  implements IInsertOccupationRepository
{
  async createOccupation(
    newOccupation: IOccupationProps
  ): Promise<IOccupationProps> {
    const createdOccupation = await OccupationModel.create({
      ...newOccupation,
      active: true
    });
    return createdOccupation;
  }
}
