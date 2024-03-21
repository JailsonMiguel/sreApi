import { IProfileUserInstituteProps } from '../../../interfaces/props/IProfileUserInstituteProps';
import { IInsertProfileUserInstituteRepository } from '../../../repositories/profileUserInstitute/insert/IInsertProfileUserInstituteRepository';
import { ISelectProfileUserInstituteRepository } from '../../../repositories/profileUserInstitute/select/ISelectProfileUserInstituteInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewProfileUserInstituteUseCase {
  private insertProfileUserInstituteRepository: IInsertProfileUserInstituteRepository;
  private selectProfileUserInstituteRepository: ISelectProfileUserInstituteRepository;
  constructor(
    insertProfileUserInstituteRepository: IInsertProfileUserInstituteRepository,
    selectProfileUserInstituteRepository: ISelectProfileUserInstituteRepository
  ) {
    this.insertProfileUserInstituteRepository =
      insertProfileUserInstituteRepository;
    this.selectProfileUserInstituteRepository =
      selectProfileUserInstituteRepository;
  }
  async handle(profileUserInstituteProps: IProfileUserInstituteProps) {
    const profileUserInstituteAlredyExists =
      await this.selectProfileUserInstituteRepository.verifyIfAlredyByProfileUserInstitute(
        profileUserInstituteProps
      );
    if (profileUserInstituteAlredyExists) {
      throw new sreError(
        'Perfil de Usuário no Instituto já cadastrado',
        'Perfil de Usuário no Instituto já cadastrado'
      );
    } else {
      const createdProfileUserInstitute =
        await this.insertProfileUserInstituteRepository.createProfileUserInstitute(
          profileUserInstituteProps
        );
      return createdProfileUserInstitute;
    }
  }
}
