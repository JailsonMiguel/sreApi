import { IUpdateOccupationInterface } from '../../../interfaces/updatesInterfaces/IUpdateOccupationInterface';

export interface IUpdateOccupationRepository {
  updateOccupation(
    occupationData: IUpdateOccupationInterface,
    id: number | string
  ): Promise<boolean>;
}
