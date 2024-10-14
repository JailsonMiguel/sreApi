import { SequelizeSelectOccupationRepository } from '../../../repositories/select/sequelizeSelectOccupationRepository';
import { GetAllOccupationsController } from './getAllOccupationsController';
import { GetAllOccupationsUseCase } from './getAllOccupationsUseCase';

const selectOccupationRepository = new SequelizeSelectOccupationRepository();
const getAllOccupationsUseCase = new GetAllOccupationsUseCase(
  selectOccupationRepository
);
const getAllOccupationsController = new GetAllOccupationsController(
  getAllOccupationsUseCase
);

export { getAllOccupationsController, getAllOccupationsUseCase };
