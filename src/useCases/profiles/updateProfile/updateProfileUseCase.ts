import { IUpdateProfileInterface } from '../../../interfaces/updatesInterfaces/IUpdateProfileInterface';
import { IUpdateProfileRepository } from '../../../repositories/profiles/update/IUpdateProfileInterfaceRepository';

export class UpdateProfileUseCase {
  constructor(private updateProfileRepository: IUpdateProfileRepository) {}

  async handle(profilesData: IUpdateProfileInterface, id: string | number) {
    const updatedProfile = this.updateProfileRepository.updateProfile(
      profilesData,
      id
    );
    return updatedProfile;
  }
}
