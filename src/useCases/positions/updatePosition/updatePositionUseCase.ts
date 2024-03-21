import { IUpdatePositionInterface } from '../../../interfaces/updatesInterfaces/IUpdatePositionInterface';
import { IUpdatePositionRepository } from '../../../repositories/positions/update/IUpdatePositionInterfaceRepository';

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
