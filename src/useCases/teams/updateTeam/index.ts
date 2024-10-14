import { SequelizeUpdateTeamRepository } from '../../../repositories/update/sequelizeUpdateTeamRepository';
import { UpdateTeamController } from './updateTeamController';
import { UpdateTeamUseCase } from './updateTeamUseCase';

const updateTeamRepository = new SequelizeUpdateTeamRepository();
const updateTeamUseCase = new UpdateTeamUseCase(updateTeamRepository);
const updateTeamController = new UpdateTeamController(updateTeamUseCase);

export { updateTeamController, updateTeamUseCase };
