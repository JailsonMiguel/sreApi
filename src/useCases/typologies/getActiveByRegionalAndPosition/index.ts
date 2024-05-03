import { SequelizeSelectTypologyRepository } from '../../../repositories/typologies/select/sequelizeSelectTypologyRepository';
import { GetActiveByRegionalAndPositionController } from './getByRegionalAndPositionController';
import { GetActiveByRegionalAndPositionUseCase } from './getByRegionalAndPositionUseCase';

const selectActiveByRegionalAndPositionRepository =
  new SequelizeSelectTypologyRepository();
const getActiveByRegionalAndPositionUseCase =
  new GetActiveByRegionalAndPositionUseCase(
    selectActiveByRegionalAndPositionRepository
  );
const getActiveByRegionalAndPositionController =
  new GetActiveByRegionalAndPositionController(
    getActiveByRegionalAndPositionUseCase
  );

export {
  getActiveByRegionalAndPositionController,
  getActiveByRegionalAndPositionUseCase
};
