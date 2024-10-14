import { IUpdateRegionalInterface } from '../../updates/IUpdateRegionalInterface';

export interface IUpdateRegionalRepository {
  updateRegional(
    regionalData: IUpdateRegionalInterface,
    id: number | string
  ): Promise<boolean>;
}
