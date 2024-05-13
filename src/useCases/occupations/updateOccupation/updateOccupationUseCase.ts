import { IUpdateOccupationInterface } from '../../../interfaces/updatesInterfaces/IUpdateOccupationInterface';
import { IUpdateOccupationRepository } from '../../../repositories/occupations/update/IUpdateOccupationInterfaceRepository';

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
