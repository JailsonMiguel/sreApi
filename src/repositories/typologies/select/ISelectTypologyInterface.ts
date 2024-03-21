import { ITypologyProps } from '../../../interfaces/props/ITypologyProps';

export interface ISelectTypologyRepository {
  verifyIfAlredyActiveByPositionAndRegional(
    typology: ITypologyProps
  ): Promise<boolean>;
  getAllTypologies(): Promise<ITypologyProps[]>;
  getAllActiveByRegional(regionalId: number): Promise<ITypologyProps[]>;
}
