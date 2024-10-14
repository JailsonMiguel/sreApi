import { IUpdateConsultantInterface } from '../../updates/IUpdateConsultantInterface';

export interface IUpdateConsultantRepository {
  updateConsultant(
    consultantData: IUpdateConsultantInterface,
    id: number | string
  ): Promise<boolean>;
}
