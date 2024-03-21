import { IUpdatePositionInterface } from '../../../interfaces/updatesInterfaces/IUpdatePositionInterface';

export interface IUpdatePositionRepository {
  updatePosition(
    positionData: IUpdatePositionInterface,
    id: number | string
  ): Promise<boolean>;
}
