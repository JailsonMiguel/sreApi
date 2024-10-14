import { IUpdateConsultantRepository } from '../../../interfaces/repositories/update/IUpdateConsultantInterfaceRepository';
import { IUpdateConsultantInterface } from '../../../interfaces/updates/IUpdateConsultantInterface';

export class UpdateConsultantUseCase {
  constructor(
    private updateConsultantRepository: IUpdateConsultantRepository
  ) {}

  async handle(
    consultantData: IUpdateConsultantInterface,
    id: string | number
  ) {
    const updatedConsultant = this.updateConsultantRepository.updateConsultant(
      consultantData,
      id
    );
    return updatedConsultant;
  }
}
