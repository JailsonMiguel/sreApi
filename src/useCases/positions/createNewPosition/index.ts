import { SequelizeInsertPositionRepository } from '../../../repositories/positions/insert/sequelizeInsertPositionRepository';
import { SequelizeSelectPositionRepository } from '../../../repositories/positions/select/sequelizeSelectPositionRepository';
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
