import { IUpdateRegionalRepository } from '../../../interfaces/repositories/update/IUpdateRegionalInterfaceRepository';
import { IUpdateRegionalInterface } from '../../../interfaces/updates/IUpdateRegionalInterface';

export class UpdateRegionalUseCase {
  constructor(private updateRegionalRepository: IUpdateRegionalRepository) {}

  async handle(regionalData: IUpdateRegionalInterface, id: string | number) {
    const updatedRegional = this.updateRegionalRepository.updateRegional(
      regionalData,
      id
    );
    return updatedRegional;
  }
}
