import { IUpdateInstituteRepository } from '../../../interfaces/repositories/update/IUpdateInstituteInterfaceRepository';
import { IUpdateInstituteInterface } from '../../../interfaces/updates/IUpdateInstituteInterface';

export class UpdateInstituteUseCase {
  constructor(private updateInstituteRepository: IUpdateInstituteRepository) {}

  async handle(institutesData: IUpdateInstituteInterface, id: string | number) {
    const updatedInstitute = this.updateInstituteRepository.updateInstitute(
      institutesData,
      id
    );
    return updatedInstitute;
  }
}
