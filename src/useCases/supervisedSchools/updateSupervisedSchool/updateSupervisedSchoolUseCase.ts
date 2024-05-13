import { IUpdateSupervisedSchoolInterface } from '../../../interfaces/updatesInterfaces/IUpdateSupervisedSchoolInterface';
import { IUpdateSupervisedSchoolRepository } from '../../../repositories/supervisedSchools/update/IUpdateSupervisedSchoolInterfaceRepository';

export class UpdateSupervisedSchoolUseCase {
  constructor(
    private updateSupervisedSchoolRepository: IUpdateSupervisedSchoolRepository
  ) {}

  async handle(
    supervisedSchoolData: IUpdateSupervisedSchoolInterface,
    id: string | number
  ) {
    const updatedSupervisedSchool =
      this.updateSupervisedSchoolRepository.updateSupervisedSchool(
        supervisedSchoolData,
        id
      );
    return updatedSupervisedSchool;
  }
}
