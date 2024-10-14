import { SequelizeInsertServantRepository } from '../../../repositories/create/sequelizeInsertServantRepository';
import { SequelizeSelectServantRepository } from '../../../repositories/select/sequelizeSelectServantRepository';
import { CreateNewServantController } from './createNewServantController';
import { CreateNewServantUseCase } from './createNewServantUseCase';

const selectServantRepository = new SequelizeSelectServantRepository();
const insertServantRepository = new SequelizeInsertServantRepository();
const createNewServantUseCase = new CreateNewServantUseCase(
  insertServantRepository,
  selectServantRepository
);
const createNewServantController = new CreateNewServantController(
  createNewServantUseCase
);

export { createNewServantController, createNewServantUseCase };
