import { ISchoolProps } from '../../../interfaces/props/ISchoolProps';
import { IInsertSchoolRepository } from '../../../interfaces/repositories/create/IInsertSchoolRepository';
import { ISelectSchoolRepository } from '../../../interfaces/repositories/select/ISelectSchoolInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewSchoolUseCase {
  private insertSchoolRepository: IInsertSchoolRepository;
  private selectSchoolRepository: ISelectSchoolRepository;
  constructor(
    insertSchoolRepository: IInsertSchoolRepository,
    selectSchoolRepository: ISelectSchoolRepository
  ) {
    this.insertSchoolRepository = insertSchoolRepository;
    this.selectSchoolRepository = selectSchoolRepository;
  }
  async handle(schoolProps: ISchoolProps) {
    const schoolAlredyExists =
      await this.selectSchoolRepository.verifyIfAlredyByInstitute(schoolProps);
    if (schoolAlredyExists) {
      throw new sreError('Escola já cadastrada', 'Escola já cadastrada');
    } else {
      const createdSchool =
        await this.insertSchoolRepository.createSchool(schoolProps);
      return createdSchool;
    }
  }
}
