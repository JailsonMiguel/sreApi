import { ITypologyProps } from '../../../interfaces/props/ITypologyProps';

export interface ISelectTypologyRepository {
  verifyIfAlredyActiveByPositionAndRegional(
    typology: ITypologyProps
  ): Promise<boolean>;
  getAllTypologies(): Promise<ITypologyProps[]>;
  getAllActiveByRegional(instituteId: number): Promise<ITypologyProps[]>;
  getAllTypologyByRegionalAndPosition(
    instituteId: number,
    positionId: number
  ): Promise<ITypologyProps[]>;
  getActiveByRegionalAndPosition(
    instituteId: number,
    positionId: number
  ): Promise<ITypologyProps>;
}
