import { ISelectProfileUserInstituteRepository } from '../../../repositories/profileUserInstitute/select/ISelectProfileUserInstituteInterface';

export class GetAllProfilesUsersInstitutesUseCase {
  private selectProfileUserInstituteRepository: ISelectProfileUserInstituteRepository;
  constructor(
    selectProfileUserInstituteRepository: ISelectProfileUserInstituteRepository
  ) {
    this.selectProfileUserInstituteRepository =
      selectProfileUserInstituteRepository;
  }
  handle = async () => {
    const listProfilesUsersInstitutes =
      await this.selectProfileUserInstituteRepository.getAllProfileUserInstitute();
    console.log(listProfilesUsersInstitutes);
    return listProfilesUsersInstitutes;
  };
}
