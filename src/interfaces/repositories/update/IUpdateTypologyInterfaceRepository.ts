import { IUpdateTypologyInterface } from '../../updates/IUpdateTypologyInterface';

export interface IUpdateTypologyRepository {
  updateTypology(
    typologyData: IUpdateTypologyInterface,
    id: number | string
  ): Promise<boolean>;
}
