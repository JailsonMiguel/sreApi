import { IUpdateSchoolRepository } from '../../../interfaces/repositories/update/IUpdateSchoolInterfaceRepository';
import { IUpdateSchoolInterface } from '../../../interfaces/updates/IUpdateSchoolInterface';

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
