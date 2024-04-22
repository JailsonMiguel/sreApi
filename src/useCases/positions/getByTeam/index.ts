import { SequelizeSelectPositionRepository } from '../../../repositories/positions/select/sequelizeSelectPositionRepository';
import { GetAllPositionsByTeamIdController } from './getByTeamController';
import { GetByTeamIdUseCase } from './getByTeamUseCase';

const selectPositionByTeamIdRepository =
  new SequelizeSelectPositionRepository();
const getAllPositionsByTeamIdUseCase = new GetByTeamIdUseCase(
  selectPositionByTeamIdRepository
);
const getAllPositionsByTeamIdController = new GetAllPositionsByTeamIdController(
  getAllPositionsByTeamIdUseCase
);

export { getAllPositionsByTeamIdController, getAllPositionsByTeamIdUseCase };
