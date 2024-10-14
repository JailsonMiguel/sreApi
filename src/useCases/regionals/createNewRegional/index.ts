import { SequelizeInsertRegionalRepository } from '../../../repositories/create/sequelizeInsertRegionalRepository';
import { SequelizeSelectRegionalRepository } from '../../../repositories/select/sequelizeSelectRegionalRepository';
import { CreateNewRegionalController } from './createNewRegionalController';
import { CreateNewRegionalUseCase } from './createNewRegionalUseCase';

const selectRegionalRepository = new SequelizeSelectRegionalRepository();
const insertRegionalRepository = new SequelizeInsertRegionalRepository();
const createNewRegionalUseCase = new CreateNewRegionalUseCase(
  insertRegionalRepository,
  selectRegionalRepository
);
const createNewRegionalController = new CreateNewRegionalController(
  createNewRegionalUseCase
);

export { createNewRegionalController, createNewRegionalUseCase };
