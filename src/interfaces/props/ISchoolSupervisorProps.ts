export interface ISchoolSupervisorProps {
  id?: number;
  schoolId: number;
  schoolSupervisorId: number;
  initialDate: Date;
  finalDate: Date;
  isActive: boolean;
}
