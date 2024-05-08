import { IUpdateSuperintendentInterface } from '../../../interfaces/updatesInterfaces/IUpdateSuperintendentInterface';

export interface IUpdateSuperintendentRepository {
  updateSuperintendent(
    superintendentData: IUpdateSuperintendentInterface,
    id: number | string
  ): Promise<boolean>;
}
