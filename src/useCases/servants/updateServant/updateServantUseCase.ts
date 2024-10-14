import { IUpdateServantRepository } from '../../../interfaces/repositories/update/IUpdateServantInterfaceRepository';
import { IUpdateServantInterface } from '../../../interfaces/updates/IUpdateServantInterface';

export class UpdateServantUseCase {
  constructor(private updateServantRepository: IUpdateServantRepository) {}

  async handle(servantData: IUpdateServantInterface, id: string | number) {
    const updatedServant = this.updateServantRepository.updateServant(
      servantData,
      id
    );
    return updatedServant;
  }
}
