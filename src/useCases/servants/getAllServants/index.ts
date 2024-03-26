import { SequelizeSelectServantRepository } from '../../../repositories/servants/select/sequelizeSelectServantRepository';
import { GetAllServantsController } from './getAllServantsController';
import { GetAllServantsUseCase } from './getAllServantsUseCase';

const selectServantRepository = new SequelizeSelectServantRepository();
const getAllServantsUseCase = new GetAllServantsUseCase(
  selectServantRepository
);
const getAllServantsController = new GetAllServantsController(
  getAllServantsUseCase
);

export { getAllServantsController, getAllServantsUseCase };
