import { ISelectSupervisedSchoolRepository } from '../../../interfaces/repositories/select/ISelectSupervisedSchoolsInterface';

export class GetAllSupervisedSchoolsUseCase {
  private selectSupervisedSchoolRepository: ISelectSupervisedSchoolRepository;
  constructor(
    selectSupervisedSchoolRepository: ISelectSupervisedSchoolRepository
  ) {
    this.selectSupervisedSchoolRepository = selectSupervisedSchoolRepository;
  }
  handle = async () => {
    const listSupervisedSchools =
      await this.selectSupervisedSchoolRepository.getAllSupervisedSchools();
    console.log(listSupervisedSchools);
    return listSupervisedSchools;
  };
}
