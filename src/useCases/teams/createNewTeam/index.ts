import { SequelizeInsertTeamRepository } from '../../../repositories/create/sequelizeInsertTeamRepository';
import { SequelizeSelectTeamRepository } from '../../../repositories/select/sequelizeSelectTeamRepository';
import { CreateNewTeamController } from './createNewTeamController';
import { CreateNewTeamUseCase } from './createNewTeamUseCase';

const selectTeamRepository = new SequelizeSelectTeamRepository();
const insertTeamRepository = new SequelizeInsertTeamRepository();
const createNewTeamUseCase = new CreateNewTeamUseCase(
  insertTeamRepository,
  selectTeamRepository
);
const createNewTeamController = new CreateNewTeamController(
  createNewTeamUseCase
);

export { createNewTeamController, createNewTeamUseCase };
