import { IUpdateSchoolSupervisorInterface } from '../../../interfaces/updatesInterfaces/IUpdateSchoolSupervisorInterface';
import { IUpdateSchoolSupervisorRepository } from '../../../repositories/schoolSupervisors/update/IUpdateSchoolSupervisorInterfaceRepository';

export class UpdateSchoolSupervisorUseCase {
  constructor(
    private updateSchoolSupervisorRepository: IUpdateSchoolSupervisorRepository
  ) {}

  async handle(
    schoolSupervisorData: IUpdateSchoolSupervisorInterface,
    id: string | number
  ) {
    const updatedSchoolSupervisor =
      this.updateSchoolSupervisorRepository.updateSchoolSupervisor(
        schoolSupervisorData,
        id
      );
    return updatedSchoolSupervisor;
  }
}
