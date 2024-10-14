import { IUpdateSupervisedSchoolRepository } from '../../../interfaces/repositories/update/IUpdateSupervisedSchoolInterfaceRepository';
import { IUpdateSupervisedSchoolInterface } from '../../../interfaces/updates/IUpdateSupervisedSchoolInterface';

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
