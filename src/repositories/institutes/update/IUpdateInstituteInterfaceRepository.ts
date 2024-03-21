import { IUpdateInstituteInterface } from '../../../interfaces/updatesInterfaces/IUpdateInstituteInterface';

export interface IUpdateInstituteRepository {
  updateInstitute(
    instituteData: IUpdateInstituteInterface,
    id: number | string
  ): Promise<boolean>;
}
