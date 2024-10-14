import { SequelizeInsertOccupationRepository } from '../../../repositories/create/sequelizeInsertOccupationRepository';
import { SequelizeSelectOccupationRepository } from '../../../repositories/select/sequelizeSelectOccupationRepository';
import { CreateNewOccupationController } from './createNewOccupationController';
import { CreateNewOccupationUseCase } from './createNewOccupationUseCase';

const selectOccupationRepository = new SequelizeSelectOccupationRepository();
const insertOccupationRepository = new SequelizeInsertOccupationRepository();
const createNewOccupationUseCase = new CreateNewOccupationUseCase(
  insertOccupationRepository,
  selectOccupationRepository
);
const createNewOccupationController = new CreateNewOccupationController(
  createNewOccupationUseCase
);

export { createNewOccupationController, createNewOccupationUseCase };
