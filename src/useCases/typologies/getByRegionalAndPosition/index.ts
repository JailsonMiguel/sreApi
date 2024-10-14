import { SequelizeSelectTypologyRepository } from '../../../repositories/select/sequelizeSelectTypologyRepository';
import { GetAllTypologiesByRegionalAndPositionController } from './getByRegionalAndPositionController';
import { GetByRegionalAndPositionUseCase } from './getByRegionalAndPositionUseCase';

const selectTypologiesByRegionalAndPositionRepository =
  new SequelizeSelectTypologyRepository();
const getAllTypologiesByRegionalAndPositionUseCase =
  new GetByRegionalAndPositionUseCase(
    selectTypologiesByRegionalAndPositionRepository
  );
const getAllTByRegionalAndPositionController =
  new GetAllTypologiesByRegionalAndPositionController(
    getAllTypologiesByRegionalAndPositionUseCase
  );

export {
  getAllTByRegionalAndPositionController,
  getAllTypologiesByRegionalAndPositionUseCase
};
