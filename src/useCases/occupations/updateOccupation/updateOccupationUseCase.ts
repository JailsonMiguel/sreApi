import { IUpdateOccupationInterface } from '../../../interfaces/updates/IUpdateOccupationInterface';
import { IUpdateOccupationRepository } from '../../../interfaces/repositories/update/IUpdateOccupationInterfaceRepository';

export class UpdateOccupationUseCase {
  constructor(
    private updateOccupationRepository: IUpdateOccupationRepository
  ) {}

  async handle(
    occupationData: IUpdateOccupationInterface,
    id: string | number
  ) {
    const updatedOccupation = this.updateOccupationRepository.updateOccupation(
      occupationData,
      id
    );
    return updatedOccupation;
  }
}
