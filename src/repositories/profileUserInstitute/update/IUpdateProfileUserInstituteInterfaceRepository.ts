import { IUpdateProfileUserInstituteInterface } from '../../../interfaces/updatesInterfaces/IUpdateProfileUserInstituteInterface';

export interface IUpdateProfileUserInstituteRepository {
  updateProfileUserInstitute(
    profileUserInstituteData: IUpdateProfileUserInstituteInterface,
    id: number | string
  ): Promise<boolean>;
}
