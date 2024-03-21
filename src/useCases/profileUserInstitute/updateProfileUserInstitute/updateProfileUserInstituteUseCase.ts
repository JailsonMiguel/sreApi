import { IUpdateProfileUserInstituteInterface } from '../../../interfaces/updatesInterfaces/IUpdateProfileUserInstituteInterface';
import { IUpdateProfileUserInstituteRepository } from '../../../repositories/profileUserInstitute/update/IUpdateProfileUserInstituteInterfaceRepository';

export class UpdateProfileUserInstituteUseCase {
  constructor(
    private updateProfileUserInstituteRepository: IUpdateProfileUserInstituteRepository
  ) {}

  async handle(
    profileUserInstituteData: IUpdateProfileUserInstituteInterface,
    id: string | number
  ) {
    const updatedProfileUserInstitute =
      this.updateProfileUserInstituteRepository.updateProfileUserInstitute(
        profileUserInstituteData,
        id
      );
    return updatedProfileUserInstitute;
  }
}
