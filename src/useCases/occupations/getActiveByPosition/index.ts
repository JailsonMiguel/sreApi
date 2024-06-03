import { SequelizeSelectOccupationRepository } from '../../../repositories/occupations/select/sequelizeSelectOccupationRepository';
import { GetOccupationActiveByRegionalController } from './getOccuptionActiveByRegionalController';
import { GetOccupationActiveByRegionalUseCase } from './getOccuptionActiveByRegionalUseCase';

const selectOccupationActiveByRegionalRepository = new SequelizeSelectOccupationRepository();
const getOccupationActiveByRegionalUseCase = new GetOccupationActiveByRegionalUseCase(
  selectOccupationActiveByRegionalRepository
);
const getOccupationActiveByRegionalController = new GetOccupationActiveByRegionalController(
  getOccupationActiveByRegionalUseCase
);

export { getOccupationActiveByRegionalController  , getOccupationActiveByRegionalUseCase };
