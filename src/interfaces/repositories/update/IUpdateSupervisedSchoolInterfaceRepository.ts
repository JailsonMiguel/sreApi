import { IUpdateSupervisedSchoolInterface } from '../../updates/IUpdateSupervisedSchoolInterface';

export interface IUpdateSupervisedSchoolRepository {
  updateSupervisedSchool(
    supervisedSchoolData: IUpdateSupervisedSchoolInterface,
    id: number | string
  ): Promise<boolean>;
}
