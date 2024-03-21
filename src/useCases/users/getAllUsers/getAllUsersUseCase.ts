import { ISelectUserRepository } from '../../../repositories/users/select/ISelectUserInterface';

export class GetAllUsersUseCase {
  private selectUserRepository: ISelectUserRepository;
  constructor(selectUserRepository: ISelectUserRepository) {
    this.selectUserRepository = selectUserRepository;
  }
  handle = async () => {
    const listUsers = await this.selectUserRepository.getAllUsers();
    console.log(listUsers);
    return listUsers;
  };
}
