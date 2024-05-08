import { IUpdateSuperintendentInterface } from '../../../interfaces/updatesInterfaces/IUpdateSuperintendentInterface';
import { IUpdateSuperintendentRepository } from '../../../repositories/superintendents/update/IUpdateSuperintendentInterfaceRepository';

export class UpdateSuperintendentUseCase {
  constructor(
    private updateSuperintendentRepository: IUpdateSuperintendentRepository
  ) {}

  async handle(
    superintendentData: IUpdateSuperintendentInterface,
    id: string | number
  ) {
    const updatedSuperintendent =
      this.updateSuperintendentRepository.updateSuperintendent(
        superintendentData,
        id
      );
    return updatedSuperintendent;
  }
}
