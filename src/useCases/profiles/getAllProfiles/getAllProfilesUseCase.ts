import { ISelectProfileRepository } from '../../../repositories/profiles/select/ISelectProfileInterface';

export class GetAllProfilesUseCase {
  private selectProfileRepository: ISelectProfileRepository;
  constructor(selectProfileRepository: ISelectProfileRepository) {
    this.selectProfileRepository = selectProfileRepository;
  }
  handle = async () => {
    const listProfiles = await this.selectProfileRepository.getAllProfiles();
    console.log(listProfiles);
    return listProfiles;
  };
}
