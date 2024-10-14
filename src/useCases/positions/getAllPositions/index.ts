import { SequelizeSelectPositionRepository } from '../../../repositories/select/sequelizeSelectPositionRepository';
import { GetAllPositionsController } from './getAllPositionsController';
import { GetAllPositionsUseCase } from './getAllPositionsUseCase';

const selectPositionRepository = new SequelizeSelectPositionRepository();
const getAllPositionsUseCase = new GetAllPositionsUseCase(
  selectPositionRepository
);
const getAllPositionsController = new GetAllPositionsController(
  getAllPositionsUseCase
);

export { getAllPositionsController, getAllPositionsUseCase };
