import { IUserProps } from '../../../interfaces/props/IUserProps';
import { IInsertUserRepository } from '../../../repositories/users/insert/IInsertUserRepository';
import { ISelectUserRepository } from '../../../repositories/users/select/ISelectUserInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewUserUseCase {
  private insertUserRepository: IInsertUserRepository;
  private selectUserRepository: ISelectUserRepository;
  constructor(
    insertUserRepository: IInsertUserRepository,
    selectUserRepository: ISelectUserRepository
  ) {
    this.insertUserRepository = insertUserRepository;
    this.selectUserRepository = selectUserRepository;
  }
  async handle(userProps: IUserProps) {
    const userAlredyExists =
      await this.selectUserRepository.verifyIfAlredyByCpf(userProps);
    if (userAlredyExists) {
      throw new sreError('Usuário já cadastrado', 'Usuário já cadastrado');
    } else {
      const createdUser = await this.insertUserRepository.create(userProps);
      return createdUser;
    }
  }
}
