import { SequelizeInsertTypologyRepository } from '../../../repositories/create/sequelizeInsertTypologyRepository';
import { SequelizeSelectTypologyRepository } from '../../../repositories/select/sequelizeSelectTypologyRepository';
import { CreateNewTypologyController } from './createNewTypologyController';
import { CreateNewTypologyUseCase } from './createNewTypologyUseCase';

const selectTypologyRepository = new SequelizeSelectTypologyRepository();
const insertTypologyRepository = new SequelizeInsertTypologyRepository();
const createNewTypologyUseCase = new CreateNewTypologyUseCase(
  insertTypologyRepository,
  selectTypologyRepository
);
const createNewTypologyController = new CreateNewTypologyController(
  createNewTypologyUseCase
);

export { createNewTypologyController, createNewTypologyUseCase };
