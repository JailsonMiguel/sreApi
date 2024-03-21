import { IInstituteProps } from '../../../interfaces/props/IInstituteProps';

export interface IInsertInstituteRepository {
  create(institute: IInstituteProps): Promise<IInstituteProps>;
}
