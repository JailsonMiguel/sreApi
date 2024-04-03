import { ISchoolSupervisorProps } from '../../../interfaces/props/ISchoolSupervisorProps';

export interface IInsertSchoolSupervisorRepository {
  createSchoolSupervisor(
    newSchoolSupervisor: ISchoolSupervisorProps
  ): Promise<ISchoolSupervisorProps>;
}
