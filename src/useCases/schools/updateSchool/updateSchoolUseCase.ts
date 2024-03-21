import { IUpdateSchoolInterface } from '../../../interfaces/updatesInterfaces/IUpdateSchoolInterface';
import { IUpdateSchoolRepository } from '../../../repositories/schools/update/IUpdateSchoolInterfaceRepository';

export class UpdateSchoolUseCase {
  constructor(private updateSchoolRepository: IUpdateSchoolRepository) {}

  async handle(schoolData: IUpdateSchoolInterface, id: string | number) {
    const updatedSchool = this.updateSchoolRepository.updateSchool(
      schoolData,
      id
    );
    return updatedSchool;
  }
}
