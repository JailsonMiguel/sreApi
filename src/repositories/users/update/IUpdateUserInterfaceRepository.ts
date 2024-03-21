import { IUpdateUserInterface } from '../../../interfaces/updatesInterfaces/IUpdateUserInterface';

export interface IUpdateUserRepository {
  updateUser(
    userData: IUpdateUserInterface,
    id: number | string
  ): Promise<boolean>;
}
