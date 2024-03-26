import { IRegionalProps } from '../../../interfaces/props/IRegionalProps';

export interface ISelectRegionalRepository {
  verifyIfAlredyByInstitute(instituteId: IRegionalProps): Promise<boolean>;
  getAllRegionals(): Promise<IRegionalProps[]>;
}
