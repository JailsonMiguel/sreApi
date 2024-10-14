import { IUpdateTypologyRepository } from '../../../interfaces/repositories/update/IUpdateTypologyInterfaceRepository';
import { IUpdateTypologyInterface } from '../../../interfaces/updates/IUpdateTypologyInterface';

export class UpdateTypologyUseCase {
  constructor(private updateTypologyRepository: IUpdateTypologyRepository) {}

  async handle(typologyData: IUpdateTypologyInterface, id: string | number) {
    const updatedTypology = this.updateTypologyRepository.updateTypology(
      typologyData,
      id
    );
    return updatedTypology;
  }
}
