import { IPositionProps } from '../../../interfaces/props/IPositionProps';

export interface ISelectPositionRepository {
  verifyIfAlredyByName(position: IPositionProps): Promise<boolean>;
  getAllPositions(): Promise<IPositionProps[]>;
}
