import { IUpdateServantInterface } from '../../updates/IUpdateServantInterface';

export interface IUpdateServantRepository {
  updateServant(
    servantData: IUpdateServantInterface,
    id: number | string
  ): Promise<boolean>;
}
