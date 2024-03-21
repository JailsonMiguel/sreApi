import { ISchoolProps } from '../../../interfaces/props/ISchoolProps';
import { IInsertSchoolRepository } from '../../../repositories/schools/insert/IInsertSchoolRepository';
import { ISelectSchoolRepository } from '../../../repositories/schools/select/ISelectSchoolInterface';
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
      await this.selectSchoolRepository.verifyIfAlredyByInstitute(
        schoolProps
      );
    if (schoolAlredyExists) {
      throw new sreError(
        'Escola já cadastrada',
        'Escola já cadastrada'
      );
    } else {
      const createdSchool =
        await this.insertSchoolRepository.createSchool(schoolProps);
      return createdSchool;
    }
  }
}
