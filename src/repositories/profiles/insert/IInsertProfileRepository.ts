import { IProfileProps } from '../../../interfaces/props/IProfileProps';

export interface IInsertProfileRepository {
  create(profile: IProfileProps): Promise<IProfileProps>;
}
