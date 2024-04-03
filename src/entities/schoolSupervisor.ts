import { ISchoolSupervisorProps } from '../interfaces/props/ISchoolSupervisorProps';

export class SchoolSupervisor {
  private schoolSupervisorProps: ISchoolSupervisorProps;
  constructor(schoolSupervisorProps: ISchoolSupervisorProps) {
    this.schoolSupervisorProps = schoolSupervisorProps;
  }
  get schoolSupervisor() {
    return this.schoolSupervisorProps;
  }
}
