import { ISupervisedSchoolProps } from '../../../interfaces/props/ISupervisedSchoolProps';

export interface IInsertSupervisedSchoolRepository {
  createSupervisedSchool(
    supervisedSchool: ISupervisedSchoolProps
  ): Promise<ISupervisedSchoolProps>;
}
