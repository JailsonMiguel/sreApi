import { IProfileProps } from '../../../interfaces/props/IProfileProps';
import { IInsertProfileRepository } from '../../../repositories/profiles/insert/IInsertProfileRepository';
import { ISelectProfileRepository } from '../../../repositories/profiles/select/ISelectProfileInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewProfileUseCase {
  private insertProfileRepository: IInsertProfileRepository;
  private selectProfileRepository: ISelectProfileRepository;
  constructor(
    insertProfileRepository: IInsertProfileRepository,
    selectProfileRepository: ISelectProfileRepository
  ) {
    this.insertProfileRepository = insertProfileRepository;
    this.selectProfileRepository = selectProfileRepository;
  }
  async handle(profileProps: IProfileProps) {
    const profileAlredyExists =
      await this.selectProfileRepository.verifyIfAlredyByName(profileProps);
    if (profileAlredyExists) {
      throw new sreError('Perfil já cadastrado', 'Perfil já cadastrado');
    } else {
      const createdProfile =
        await this.insertProfileRepository.create(profileProps);
      return createdProfile;
    }
  }
}
