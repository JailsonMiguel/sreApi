import { IUpdatePositionRepository } from '../../../interfaces/repositories/update/IUpdatePositionInterfaceRepository';
import { IUpdatePositionInterface } from '../../../interfaces/updates/IUpdatePositionInterface';

export class UpdatePositionUseCase {
  constructor(private updatePositionRepository: IUpdatePositionRepository) {}

  async handle(positionData: IUpdatePositionInterface, id: string | number) {
    const updatedPosition = this.updatePositionRepository.updatePosition(
      positionData,
      id
    );
    return updatedPosition;
  }
}
