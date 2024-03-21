import { IProfileUserInstituteProps } from '../../../interfaces/props/IProfileUserInstituteProps';

export interface ISelectProfileUserInstituteRepository {
  verifyIfAlredyByProfileUserInstitute(
    profileUserInstitute: IProfileUserInstituteProps
  ): Promise<boolean>;
  getAllProfileByUser(userId: number): Promise<IProfileUserInstituteProps[]>;
  getAllProfileByInstitute(
    instituteId: number
  ): Promise<IProfileUserInstituteProps[]>;
  getAllProfileUserInstitute(): Promise<IProfileUserInstituteProps[]>;
}
