import { SequelizeInsertUserRepository } from '../../../repositories/users/insert/sequelizeInsertUserRepository';
import { SequelizeSelectUserRepository } from '../../../repositories/users/select/sequelizeSelectUserRepository';
import { CreateNewUserController } from './createNewUserController';
import { CreateNewUserUseCase } from './createNewUserUseCase';

const selectUserRepository = new SequelizeSelectUserRepository();
const insertUserRepository = new SequelizeInsertUserRepository();
const createNewUserUseCase = new CreateNewUserUseCase(
  insertUserRepository,
  selectUserRepository
);
const createNewUserController = new CreateNewUserController(
  createNewUserUseCase
);

export { createNewUserController, createNewUserUseCase };
