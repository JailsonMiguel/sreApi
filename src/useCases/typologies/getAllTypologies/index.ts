import { SequelizeSelectTypologyRepository } from '../../../repositories/typologies/select/sequelizeSelectTypologyRepository';
import { GetAllTypologiesController } from './getAllTypologiesController';
import { GetAllTypologiesUseCase } from './getAllTypologiesUseCase';

const selectTypologyRepository = new SequelizeSelectTypologyRepository();
const getAllTypologiesUseCase = new GetAllTypologiesUseCase(
  selectTypologyRepository
);
const getAllTypologiesController = new GetAllTypologiesController(
  getAllTypologiesUseCase
);

export { getAllTypologiesController, getAllTypologiesUseCase };
