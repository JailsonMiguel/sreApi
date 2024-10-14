import { SequelizeSelectRegionalRepository } from '../../../repositories/select/sequelizeSelectRegionalRepository';
import { GetAllRegionalsController } from './getAllRegionalsController';
import { GetAllRegionalsUseCase } from './getAllRegionalsUseCase';

const selectRegionalRepository = new SequelizeSelectRegionalRepository();
const getAllRegionalsUseCase = new GetAllRegionalsUseCase(
  selectRegionalRepository
);
const getAllRegionalsController = new GetAllRegionalsController(
  getAllRegionalsUseCase
);

export { getAllRegionalsController, getAllRegionalsUseCase };
