import { ISupervisedSchoolProps } from '../../../interfaces/props/ISupervisedSchoolProps';

export interface ISelectSupervisedSchoolRepository {
  verifyIfAlredyActiveByInstituteAndOccupation(
    supervisedSchool: ISupervisedSchoolProps
  ): Promise<boolean>;
  checkNumberOfSchools(occupationId: number): Promise<number | null>;
  getAllSupervisedSchools(): Promise<ISupervisedSchoolProps[]>;
  getAllActiveByOccupationId(
    occupationId: number
  ): Promise<ISupervisedSchoolProps[]>;
  getAllSupervisedSchoolByInstitute(
    instituteId: number
  ): Promise<ISupervisedSchoolProps[]>;
  getAllOccupationActive(): Promise<ISupervisedSchoolProps[]>;
}
