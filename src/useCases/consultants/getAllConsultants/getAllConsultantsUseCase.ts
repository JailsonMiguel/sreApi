import { ISelectConsultantRepository } from '../../../interfaces/repositories/select/ISelectConsultantInterface';

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
