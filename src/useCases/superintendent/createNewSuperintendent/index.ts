import { SequelizeInsertSuperintendentRepository } from '../../../repositories/superintendents/insert/sequelizeInsertSuperintendentRepository';
import { SequelizeSelectSuperintendentRepository } from '../../../repositories/superintendents/select/sequelizeSelectSuperintendentRepository';
import { CreateNewSuperintendentController } from './createNewSuperintendentController';
import { CreateNewSuperintendentUseCase } from './createNewSuperintendentUseCase';

const selectSuperintendentRepository =
  new SequelizeSelectSuperintendentRepository();
const insertSuperintendentRepository =
  new SequelizeInsertSuperintendentRepository();
const createNewSuperintendentUseCase = new CreateNewSuperintendentUseCase(
  insertSuperintendentRepository,
  selectSuperintendentRepository
);
const createNewSuperintendentController = new CreateNewSuperintendentController(
  createNewSuperintendentUseCase
);

export { createNewSuperintendentController, createNewSuperintendentUseCase };
