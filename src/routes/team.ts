import { Router } from 'express';
import { createNewTeamController } from '../useCases/teams/createNewTeam';
import { getAllTeamsController } from '../useCases/teams/getAllTeams';
import { updateTeamController } from '../useCases/teams/updateTeam';
import { getAllTeamsByConsultantIdController } from '../useCases/teams/getByConsultant';

const teamRouter = Router();
teamRouter.post('/team', createNewTeamController.handle);
teamRouter.get('/team', getAllTeamsController.handle);
teamRouter.put('/team/:teamId', updateTeamController.handle);
teamRouter.get('/team/:consultantId',getAllTeamsByConsultantIdController.handle)

export { teamRouter };
