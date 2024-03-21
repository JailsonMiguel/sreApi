import { IUpdateTypologyInterface } from '../../../interfaces/updatesInterfaces/IUpdateTypologyInterface';

export interface IUpdateTypologyRepository {
  updateTypology(
    typologyData: IUpdateTypologyInterface,
    id: number | string
  ): Promise<boolean>;
}
