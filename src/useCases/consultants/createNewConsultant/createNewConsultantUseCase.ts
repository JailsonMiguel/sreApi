import { IConsultantProps } from '../../../interfaces/props/IConsultantProps';
import { IInsertConsultantRepository } from '../../../repositories/consultants/insert/IInsertConsultantRepository';
import { ISelectConsultantRepository } from '../../../repositories/consultants/select/ISelectConsultantInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewConsultantUseCase {
  private insertConsultantRepository: IInsertConsultantRepository;
  private selectConsultantRepository: ISelectConsultantRepository;
  constructor(
    insertConsultantRepository: IInsertConsultantRepository,
    selectConsultantRepository: ISelectConsultantRepository
  ) {
    this.insertConsultantRepository = insertConsultantRepository;
    this.selectConsultantRepository = selectConsultantRepository;
  }
  async handle(consultantProps: IConsultantProps) {
    const consultantAlredyExists =
      await this.selectConsultantRepository.verifyIfAlredyByDescription(
        consultantProps
      );
    if (consultantAlredyExists) {
      throw new sreError(
        'Assessoria já cadastrada',
        'Assessoria já cadastrada'
      );
    } else {
      const createdConsultant =
        await this.insertConsultantRepository.createConsultant(consultantProps);
      return createdConsultant;
    }
  }
}
