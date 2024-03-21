import { IUpdateInstituteInterface } from '../../../interfaces/updatesInterfaces/IUpdateInstituteInterface';
import { IUpdateInstituteRepository } from '../../../repositories/institutes/update/IUpdateInstituteInterfaceRepository';

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
