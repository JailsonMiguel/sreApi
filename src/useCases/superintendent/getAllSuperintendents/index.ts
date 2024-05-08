import { SequelizeSelectSuperintendentRepository } from '../../../repositories/superintendents/select/sequelizeSelectSuperintendentRepository';
import { GetAllSuperintendentsController } from './getAllSuperintendentsController';
import { GetAllSuperintendentsUseCase } from './getAllSuperintendentsUseCase';

const selectSuperintendentRepository =
  new SequelizeSelectSuperintendentRepository();
const getAllSuperintendentsUseCase = new GetAllSuperintendentsUseCase(
  selectSuperintendentRepository
);
const getAllSuperintendentsController = new GetAllSuperintendentsController(
  getAllSuperintendentsUseCase
);

export { getAllSuperintendentsController, getAllSuperintendentsUseCase };
