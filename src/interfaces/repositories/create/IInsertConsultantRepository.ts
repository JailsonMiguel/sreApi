import { IConsultantProps } from '../../props/IConsultantProps';

export interface IInsertConsultantRepository {
  createConsultant(consultant: IConsultantProps): Promise<IConsultantProps>;
}
