import { IUpdateServantInterface } from '../../../interfaces/updatesInterfaces/IUpdateServantInterface';
import { IUpdateServantRepository } from '../../../repositories/servants/update/IUpdateServantInterfaceRepository';

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
