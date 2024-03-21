import { ISchoolProps } from '../../../interfaces/props/ISchoolProps';

export interface ISelectSchoolRepository {
  verifyIfAlredyByInstitute(idInstitute: ISchoolProps): Promise<boolean>;
  getAllSchools(): Promise<ISchoolProps[]>;
}
