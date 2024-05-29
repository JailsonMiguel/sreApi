import { Router } from 'express';
import { getAllSuperintendentsController } from '../useCases/occupations/getAllSuperintendentActive';

const occupationRouter = Router();
// occupationRouter.post('/occupation', createNewTeamController.handle);
// occupationRouter.get('/occupation', getAllTeamsController.handle);
// occupationRouter.put('/occupation/:teamId', updateTeamController.handle);
occupationRouter.get(
  '/occupation/:positionId',
  getAllSuperintendentsController.handle
);

export { occupationRouter };
