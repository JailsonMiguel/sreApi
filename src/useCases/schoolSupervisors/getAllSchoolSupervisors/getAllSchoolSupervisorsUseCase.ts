import { ISelectSchoolSupervisorRepository } from '../../../repositories/schoolSupervisors/select/ISelectSchoolSupervisorInterface';

export class GetAllSchoolSupervisorsUseCase {
  private selectSchoolSupervisorRepository: ISelectSchoolSupervisorRepository;
  constructor(
    selectSchoolSupervisorRepository: ISelectSchoolSupervisorRepository
  ) {
    this.selectSchoolSupervisorRepository = selectSchoolSupervisorRepository;
  }
  handle = async () => {
    const listSchoolSupervisors =
      await this.selectSchoolSupervisorRepository.getAllSchoolSupervisors();
    console.log(listSchoolSupervisors);
    return listSchoolSupervisors;
  };
}
