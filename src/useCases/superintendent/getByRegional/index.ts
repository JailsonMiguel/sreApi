import { SequelizeSelectSuperintendentRepository } from '../../../repositories/superintendents/select/sequelizeSelectSuperintendentRepository';
import { GetAllSuperintendentsByRegionalIdController } from './getByRegionalController';
import { GetByRegionalIdUseCase } from './getByRegionalUseCase';

const selectSuperintendentByRegionalIdRepository =
  new SequelizeSelectSuperintendentRepository();
const getAllSuperintendentsByRegionalIdUseCase = new GetByRegionalIdUseCase(
  selectSuperintendentByRegionalIdRepository
);
const getAllSuperintendentsByRegionalIdController =
  new GetAllSuperintendentsByRegionalIdController(
    getAllSuperintendentsByRegionalIdUseCase
  );

export {
  getAllSuperintendentsByRegionalIdController,
  getAllSuperintendentsByRegionalIdUseCase
};
