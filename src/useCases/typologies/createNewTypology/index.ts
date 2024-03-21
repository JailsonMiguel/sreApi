import { SequelizeInsertTypologyRepository } from '../../../repositories/typologies/insert/sequelizeInsertTypologyRepository';
import { SequelizeSelectTypologyRepository } from '../../../repositories/typologies/select/sequelizeSelectTypologyRepository';
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
