import { SequelizeSelectOccupationRepository } from '../../../repositories/select/sequelizeSelectOccupationRepository';
import { GetAllSuperintendentsController } from './getAllSuperintendentsController';
import { GetAllSupertintendentsUseCase } from './getAllSuperintendentsUseCase';

const selectOccupationRepository = new SequelizeSelectOccupationRepository();
const getAllSuperintendentsUseCase = new GetAllSupertintendentsUseCase(
  selectOccupationRepository
);
const getAllSuperintendentsController = new GetAllSuperintendentsController(
  getAllSuperintendentsUseCase
);

export { getAllSuperintendentsController, getAllSuperintendentsUseCase };
