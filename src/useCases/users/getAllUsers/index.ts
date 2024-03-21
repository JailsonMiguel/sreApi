import { SequelizeSelectUserRepository } from '../../../repositories/users/select/sequelizeSelectUserRepository';
import { GetAllUsersController } from './getAllUsersController';
import { GetAllUsersUseCase } from './getAllUsersUseCase';

const selectUserRepository = new SequelizeSelectUserRepository();
const getAllUsersUseCase = new GetAllUsersUseCase(selectUserRepository);
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);

export { getAllUsersController, getAllUsersUseCase };
