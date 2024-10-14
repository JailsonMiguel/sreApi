import { IUpdateOccupationInterface } from '../../updates/IUpdateOccupationInterface';

export interface IUpdateOccupationRepository {
  updateOccupation(
    occupationData: IUpdateOccupationInterface,
    id: number | string
  ): Promise<boolean>;
}
