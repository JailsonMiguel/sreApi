import { ISelectConsultantRepository } from '../../../repositories/consultants/select/ISelectConsultantInterface';

export class GetAllConsultantsUseCase {
  private selectConsultantRepository: ISelectConsultantRepository;
  constructor(selectConsultantRepository: ISelectConsultantRepository) {
    this.selectConsultantRepository = selectConsultantRepository;
  }
  handle = async () => {
    const listConsultants =
      await this.selectConsultantRepository.getAllConsultants();
    console.log(listConsultants);
    return listConsultants;
  };
}
