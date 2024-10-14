import { ISelectSchoolRepository } from '../../../interfaces/repositories/select/ISelectSchoolInterface';

export class GetAllSchoolsUseCase {
  private selectSchoolRepository: ISelectSchoolRepository;
  constructor(selectSchoolRepository: ISelectSchoolRepository) {
    this.selectSchoolRepository = selectSchoolRepository;
  }
  handle = async () => {
    const listSchools = await this.selectSchoolRepository.getAllSchools();
    console.log(listSchools);
    return listSchools;
  };
}
