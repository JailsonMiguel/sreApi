import { IRegionalProps } from '../../../interfaces/props/IRegionalProps';

export interface ISelectRegionalRepository {
  verifyIfAlredyByInstitute(idInstitute: IRegionalProps): Promise<boolean>;
  getAllRegionals(): Promise<IRegionalProps[]>;
}
