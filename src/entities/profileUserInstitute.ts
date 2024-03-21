import { IProfileUserInstituteProps } from '../interfaces/props/IProfileUserInstituteProps';

export class ProfileUserInstitute {
  private profileUserInstituteProps: IProfileUserInstituteProps;
  constructor(profileUserInstituteProps: IProfileUserInstituteProps) {
    this.profileUserInstituteProps = profileUserInstituteProps;
  }
  get profileUserInstitute() {
    return this.profileUserInstituteProps;
  }
}
