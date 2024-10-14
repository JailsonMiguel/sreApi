import { IUpdateSchoolInterface } from '../../updates/IUpdateSchoolInterface';

export interface IUpdateSchoolRepository {
  updateSchool(
    schoolData: IUpdateSchoolInterface,
    id: number | string
  ): Promise<boolean>;
}
