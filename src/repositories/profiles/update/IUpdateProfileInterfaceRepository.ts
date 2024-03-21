import { IUpdateProfileInterface } from '../../../interfaces/updatesInterfaces/IUpdateProfileInterface';

export interface IUpdateProfileRepository {
  updateProfile(
    profileData: IUpdateProfileInterface,
    id: number | string
  ): Promise<boolean>;
}
