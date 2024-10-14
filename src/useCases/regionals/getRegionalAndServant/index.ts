import { SequelizeSelectRegionalRepository } from '../../../repositories/select/sequelizeSelectRegionalRepository';
import { GetAllRegionalsAndSuperintendentsUseCase } from './getAllRegionalsAndSuperintendentUseCase';
import { GetAllRegionalAndSuperintendentsController } from './getAllRegionalsAndSuperintendentsController';

const selectAllRegionalRepository = new SequelizeSelectRegionalRepository();
const getAllRegionalsAndSuperintendentsUseCase = new GetAllRegionalsAndSuperintendentsUseCase(
  selectAllRegionalRepository
);
const getAllRegionalAndSuperintendentsController = new GetAllRegionalAndSuperintendentsController(
  getAllRegionalsAndSuperintendentsUseCase
);

export { getAllRegionalAndSuperintendentsController, getAllRegionalsAndSuperintendentsUseCase };
