import { Router } from 'express';
import { getAllSuperintendentsController } from '../useCases/occupations/getAllSuperintendentActive';
import { getSuperintendentByInstituteController } from '../useCases/occupations/getAllSuperintendentsByIntituteUseCase';
import { updateOccupationController } from '../useCases/occupations/updateOccupation';

const occupationRouter = Router();
// occupationRouter.post('/occupation', createNewTeamController.handle);
// occupationRouter.get('/occupation', getAllTeamsController.handle);
occupationRouter.put(
  '/occupation/:occupationId',
  updateOccupationController.handle
);
occupationRouter.get(
  '/occupation/:positionId',
  getAllSuperintendentsController.handle
);
occupationRouter.get(
  '/occupation/:instituteId/:positionId',
  getSuperintendentByInstituteController.handle
);

export { occupationRouter };
