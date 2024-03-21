import { IUpdateRegionalInterface } from '../../../interfaces/updatesInterfaces/IUpdateRegionalInterface';

export interface IUpdateRegionalRepository {
  updateRegional(
    regionalData: IUpdateRegionalInterface,
    id: number | string
  ): Promise<boolean>;
}
