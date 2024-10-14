import { IPositionProps } from '../../props/IPositionProps';

export interface IInsertPositionRepository {
  createPosition(position: IPositionProps): Promise<IPositionProps>;
}
