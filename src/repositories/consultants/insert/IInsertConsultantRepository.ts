import { IConsultantProps } from '../../../interfaces/props/IConsultantProps';

export interface IInsertConsultantRepository {
  createConsultant(consultant: IConsultantProps): Promise<IConsultantProps>;
}
