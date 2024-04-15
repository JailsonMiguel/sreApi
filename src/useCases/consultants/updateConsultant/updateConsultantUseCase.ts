import { IUpdateConsultantInterface } from '../../../interfaces/updatesInterfaces/IUpdateConsultantInterface';
import { IUpdateConsultantRepository } from '../../../repositories/consultants/update/IUpdateConsultantInterfaceRepository';

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
