import { IUpdateSchoolSupervisorInterface } from '../../../interfaces/updatesInterfaces/IUpdateSchoolSupervisorInterface';

export interface IUpdateSchoolSupervisorRepository {
  updateSchoolSupervisor(
    schoolSupervisorData: IUpdateSchoolSupervisorInterface,
    id: number | string
  ): Promise<boolean>;
}
