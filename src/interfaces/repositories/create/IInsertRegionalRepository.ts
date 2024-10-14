import { IRegionalProps } from '../../../interfaces/props/IRegionalProps';

export interface IInsertRegionalRepository {
  createRegional(regional: IRegionalProps): Promise<IRegionalProps>;
}
