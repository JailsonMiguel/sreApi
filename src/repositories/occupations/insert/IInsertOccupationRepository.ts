import { IOccupationProps } from '../../../interfaces/props/IOccupationProps';

export interface IInsertOccupationRepository {
  createOccupation(occupation: IOccupationProps): Promise<IOccupationProps>;
}
