import { IUpdateSupervisedSchoolInterface } from '../../../interfaces/updatesInterfaces/IUpdateSupervisedSchoolInterface';

export interface IUpdateSupervisedSchoolRepository {
  updateSupervisedSchool(
    supervisedSchoolData: IUpdateSupervisedSchoolInterface,
    id: number | string
  ): Promise<boolean>;
}
