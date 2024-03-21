import { ISchoolProps } from '../../../interfaces/props/ISchoolProps';

export interface IInsertSchoolRepository {
  createSchool(newSchool: ISchoolProps): Promise<ISchoolProps>;
}
