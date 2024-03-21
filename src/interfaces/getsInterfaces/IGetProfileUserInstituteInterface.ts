import { IInstituteProps } from '../props/IInstituteProps';
import { IProfileProps } from '../props/IProfileProps';
import { IProfileUserInstituteProps } from '../props/IProfileUserInstituteProps';
import { IUserProps } from '../props/IUserProps';

type IGetProfileUserInstituteInterface = {
  profileUserInstitute: IProfileUserInstituteProps;
  profile: IProfileProps;
  user: IUserProps;
  institute: IInstituteProps;
}[];
