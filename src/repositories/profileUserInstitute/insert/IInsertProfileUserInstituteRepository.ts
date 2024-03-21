import { IProfileUserInstituteProps } from '../../../interfaces/props/IProfileUserInstituteProps';

export interface IInsertProfileUserInstituteRepository {
  createProfileUserInstitute(
    profileUserInstitute: IProfileUserInstituteProps
  ): Promise<IProfileUserInstituteProps>;
}
