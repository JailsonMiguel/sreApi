import { IUpdateConsultantInterface } from '../../../interfaces/updatesInterfaces/IUpdateConsultantInterface';

export interface IUpdateConsultantRepository {
  updateConsultant(
    consultantData: IUpdateConsultantInterface,
    id: number | string
  ): Promise<boolean>;
}
