import { IUpdateUserInterface } from '../../../interfaces/updatesInterfaces/IUpdateUserInterface';
import { IUpdateUserRepository } from '../../../repositories/users/update/IUpdateUserInterfaceRepository';

export class UpdateUserUseCase {
  constructor(private updateUserRepository: IUpdateUserRepository) {}

  async handle(usersData: IUpdateUserInterface, id: string | number) {
    const updatedUser = this.updateUserRepository.updateUser(usersData, id);
    return updatedUser;
  }
}
