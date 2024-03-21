import { IProfileProps } from '../../../interfaces/props/IProfileProps';

export interface ISelectProfileRepository {
  verifyIfAlredyByName(profile: IProfileProps): Promise<boolean>;
  getAllProfiles(): Promise<IProfileProps[]>;
}
