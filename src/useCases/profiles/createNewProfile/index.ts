import { SequelizeInsertProfileRepository } from '../../../repositories/profiles/insert/sequelizeInsertProfileRepository';
import { SequelizeSelectProfileRepository } from '../../../repositories/profiles/select/sequelizeSelectProfileRepository';
import { CreateNewProfileController } from './createNewProfileController';
import { CreateNewProfileUseCase } from './createNewProfileUseCase';

const selectProfileRepository = new SequelizeSelectProfileRepository();
const insertProfileRepository = new SequelizeInsertProfileRepository();
const createNewProfileUseCase = new CreateNewProfileUseCase(
  insertProfileRepository,
  selectProfileRepository
);
const createNewProfileController = new CreateNewProfileController(
  createNewProfileUseCase
);

export { createNewProfileController, createNewProfileUseCase };
