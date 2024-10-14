import { IServantProps } from '../../../interfaces/props/IServantProps';

export interface IInsertServantRepository {
  createServant(servant: IServantProps): Promise<IServantProps>;
}
