import { IUpdateRegionalInterface } from '../../../interfaces/updatesInterfaces/IUpdateRegionalInterface';
import { IUpdateRegionalRepository } from '../../../repositories/regionals/update/IUpdateRegionalInterfaceRepository';

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
