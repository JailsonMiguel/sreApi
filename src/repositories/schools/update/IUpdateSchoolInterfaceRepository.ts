import { IUpdateSchoolInterface } from '../../../interfaces/updatesInterfaces/IUpdateSchoolInterface';

export interface IUpdateSchoolRepository {
  updateSchool(
    schoolData: IUpdateSchoolInterface,
    id: number | string
  ): Promise<boolean>;
}
