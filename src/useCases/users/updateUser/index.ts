import { SequelizeUpdateUserRepository } from '../../../repositories/users/update/sequelizeUpdateUserRepository';
import { UpdateUserController } from './updateUserController';
import { UpdateUserUseCase } from './updateUserUseCase';

const updateUserRepository = new SequelizeUpdateUserRepository();
const updateUserUseCase = new UpdateUserUseCase(updateUserRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController, updateUserUseCase };
