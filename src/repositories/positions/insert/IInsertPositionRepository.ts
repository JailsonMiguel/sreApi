import { IPositionProps } from '../../../interfaces/props/IPositionProps';

export interface IInsertPositionRepository {
  createPosition(position: IPositionProps): Promise<IPositionProps>;
}
