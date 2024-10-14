import { IServantProps } from '../../../interfaces/props/IServantProps';

export interface ISelectServantRepository {
  verifyIfAlredyByUserRegional(servant: IServantProps): Promise<boolean>;
  getAllServantActive(): Promise<IServantProps[]>;
  getAllServant(): Promise<IServantProps[]>;
  getServantByCpf(cpf: string): Promise<IServantProps>;
}
