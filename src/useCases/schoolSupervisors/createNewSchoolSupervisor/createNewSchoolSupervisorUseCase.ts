import { ISchoolSupervisorProps } from '../../../interfaces/props/ISchoolSupervisorProps';
import { IInsertSchoolSupervisorRepository } from '../../../repositories/schoolSupervisors/insert/IInsertSchoolSupervisorRepository';
import { ISelectSchoolSupervisorRepository } from '../../../repositories/schoolSupervisors/select/ISelectSchoolSupervisorInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewSchoolSupervisorUseCase {
  private insertSchoolSupervisorRepository: IInsertSchoolSupervisorRepository;
  private selectSchoolSupervisorRepository: ISelectSchoolSupervisorRepository;
  constructor(
    insertSchoolSupervisorRepository: IInsertSchoolSupervisorRepository,
    selectSchoolSupervisorRepository: ISelectSchoolSupervisorRepository
  ) {
    this.insertSchoolSupervisorRepository = insertSchoolSupervisorRepository;
    this.selectSchoolSupervisorRepository = selectSchoolSupervisorRepository;
  }
  async handle(schoolSupervisorProps: ISchoolSupervisorProps) {
    const schoolSupervisorAlredyExists =
      await this.selectSchoolSupervisorRepository.verifyIfAlredyBySchool(
        schoolSupervisorProps
      );
    if (schoolSupervisorAlredyExists) {
      throw new sreError(
        'Supervisor já vinculado a esta escola',
        'Supervisor já vinculado a esta escola'
      );
    } else {
      const createdSchoolSupervisor =
        await this.insertSchoolSupervisorRepository.createSchoolSupervisor(
          schoolSupervisorProps
        );
      return createdSchoolSupervisor;
    }
  }
}
