import { IInstituteProps } from "../../../interfaces/props/IInstituteProps";

export interface ISelectInstituteRepository {
  verifyIfAlredyByName(institute: IInstituteProps): Promise<boolean>;
  getAllInstitutes(): Promise<IInstituteProps[]>;
}
