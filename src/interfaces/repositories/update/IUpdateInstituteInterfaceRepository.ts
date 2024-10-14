import { IUpdateInstituteInterface } from '../../updates/IUpdateInstituteInterface';

export interface IUpdateInstituteRepository {
  updateInstitute(
    instituteData: IUpdateInstituteInterface,
    id: number | string
  ): Promise<boolean>;
}
