import { IOccupationProps } from '../../../interfaces/props/IOccupationProps';
import { OccupationModel } from '../../../models/occupationModel';
import { IInsertOccupationRepository } from './IInsertOccupationRepository';

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
