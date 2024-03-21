import { IUpdateTypologyInterface } from '../../../interfaces/updatesInterfaces/IUpdateTypologyInterface';
import { IUpdateTypologyRepository } from '../../../repositories/typologies/update/IUpdateTypologyInterfaceRepository';

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
