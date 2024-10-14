import { SequelizeInsertPositionRepository } from '../../../repositories/create/sequelizeInsertPositionRepository';
import { SequelizeSelectPositionRepository } from '../../../repositories/select/sequelizeSelectPositionRepository';
import { CreateNewPositionController } from './createNewPositionController';
import { CreateNewPositionUseCase } from './createNewPositionUseCase';

const selectPositionRepository = new SequelizeSelectPositionRepository();
const insertPositionRepository = new SequelizeInsertPositionRepository();
const createNewPositionUseCase = new CreateNewPositionUseCase(
  insertPositionRepository,
  selectPositionRepository
);
const createNewPositionController = new CreateNewPositionController(
  createNewPositionUseCase
);

export { createNewPositionController, createNewPositionUseCase };
