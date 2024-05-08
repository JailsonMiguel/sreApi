import { ISuperintendentProps } from '../../../interfaces/props/ISuperintendentProps';

export interface IInsertSuperintendentRepository {
  createSuperintendent(
    newSuperintendent: ISuperintendentProps
  ): Promise<ISuperintendentProps>;
}
