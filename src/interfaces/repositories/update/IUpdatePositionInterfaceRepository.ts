import { IUpdatePositionInterface } from '../../updates/IUpdatePositionInterface';

export interface IUpdatePositionRepository {
  updatePosition(
    positionData: IUpdatePositionInterface,
    id: number | string
  ): Promise<boolean>;
}
