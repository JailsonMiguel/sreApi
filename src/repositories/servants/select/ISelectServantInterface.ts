import { IServantProps } from '../../../interfaces/props/IServantProps';

export interface ISelectServantRepository {
  verifyIfAlredyByUserRegional(servant: IServantProps): Promise<boolean>;
  getAllActiveByPositionAndRegional(
    positionId: number,
    regionalId: number
  ): Promise<IServantProps[]>;
  getAllActiveByPosition(positionId: number): Promise<IServantProps[]>;
  getAllActiveByRegional(regionalId: number): Promise<IServantProps[]>;
  getAllServantActive(): Promise<IServantProps[]>;
  getAllServant(): Promise<IServantProps[]>;
}
