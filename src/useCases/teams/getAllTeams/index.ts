import { SequelizeSelectTeamRepository } from '../../../repositories/teams/select/sequelizeSelectTeamRepository';
import { GetAllTeamsController } from './getAllTeamsController';
import { GetAllTeamsUseCase } from './getAllTeamsUseCase';

const selectTeamRepository = new SequelizeSelectTeamRepository();
const getAllTeamsUseCase = new GetAllTeamsUseCase(selectTeamRepository);
const getAllTeamsController = new GetAllTeamsController(getAllTeamsUseCase);

export { getAllTeamsController, getAllTeamsUseCase };
