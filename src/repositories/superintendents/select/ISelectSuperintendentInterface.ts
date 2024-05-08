import { ISuperintendentProps } from '../../../interfaces/props/ISuperintendentProps';

export interface ISelectSuperintendentRepository {
  verifyIfAlredyByRegional(regionalId: ISuperintendentProps): Promise<boolean>;
  getAllSuperintendents(): Promise<ISuperintendentProps[]>;
  getAllSuperintendentByRegional(
    regionalId: ISuperintendentProps
  ): Promise<ISuperintendentProps[]>;
}
