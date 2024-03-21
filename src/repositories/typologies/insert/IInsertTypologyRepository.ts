import { ITypologyProps } from '../../../interfaces/props/ITypologyProps';

export interface IInsertTypologyRepository {
  createTypology(typology: ITypologyProps): Promise<ITypologyProps>;
}
