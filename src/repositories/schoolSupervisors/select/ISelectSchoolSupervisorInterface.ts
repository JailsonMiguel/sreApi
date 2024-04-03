import { ISchoolSupervisorProps } from '../../../interfaces/props/ISchoolSupervisorProps';

export interface ISelectSchoolSupervisorRepository {
  verifyIfAlredyBySchool(
    schoolId: ISchoolSupervisorProps
  ): Promise<boolean>;
  getAllSchoolSupervisors(): Promise<ISchoolSupervisorProps[]>;
  getAllSchoolSupervisorByRegional(
    regionalId: ISchoolSupervisorProps
  ): Promise<ISchoolSupervisorProps[]>;
}
