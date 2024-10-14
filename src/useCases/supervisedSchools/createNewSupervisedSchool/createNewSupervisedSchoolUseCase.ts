import { ISupervisedSchoolProps } from '../../../interfaces/props/ISupervisedSchoolProps';
import { IInsertSupervisedSchoolRepository } from '../../../interfaces/repositories/create/IInsertSupervisedSchoolRepository';
import { ISelectSupervisedSchoolRepository } from '../../../interfaces/repositories/select/ISelectSupervisedSchoolsInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewSupervisedSchoolUseCase {
  private insertSupervisedSchoolRepository: IInsertSupervisedSchoolRepository;
  private selectSupervisedSchoolRepository: ISelectSupervisedSchoolRepository;
  constructor(
    insertSupervisedSchoolRepository: IInsertSupervisedSchoolRepository,
    selectSupervisedSchoolRepository: ISelectSupervisedSchoolRepository
  ) {
    this.insertSupervisedSchoolRepository = insertSupervisedSchoolRepository;
    this.selectSupervisedSchoolRepository = selectSupervisedSchoolRepository;
  }
  async handle(supervisedSchoolProps: ISupervisedSchoolProps) {
    const supervisedSchoolAlredyExists =
      await this.selectSupervisedSchoolRepository.verifyIfAlredyActiveByInstituteAndOccupation(
        supervisedSchoolProps
      );
    if (supervisedSchoolAlredyExists) {
      throw new sreError(
        'Supervisor já vinculado a esta Escola',
        'Supervisor já vinculado a esta Escola'
      );
    } else {
      const createdSupervisedSchool =
        await this.insertSupervisedSchoolRepository.createSupervisedSchool(
          supervisedSchoolProps
        );
      return createdSupervisedSchool;
    }
  }
}
