import { SequelizeInsertOccupationRepository } from '../../../repositories/occupations/insert/sequelizeInsertOccupationRepository';
import { SequelizeSelectOccupationRepository } from '../../../repositories/occupations/select/sequelizeSelectOccupationRepository';
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
