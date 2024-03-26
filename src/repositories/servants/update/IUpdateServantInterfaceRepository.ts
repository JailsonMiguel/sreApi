import { IUpdateServantInterface } from '../../../interfaces/updatesInterfaces/IUpdateServantInterface';

export interface IUpdateServantRepository {
  updateServant(
    servantData: IUpdateServantInterface,
    id: number | string
  ): Promise<boolean>;
}
