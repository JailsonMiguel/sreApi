import { Router } from 'express';
import { getAllSuperintendentsController } from '../useCases/occupations/getAllSuperintendentActive';
import { getSuperintendentByInstituteController } from '../useCases/occupations/getAllSuperintendentsByIntituteUseCase';
import { updateOccupationController } from '../useCases/occupations/updateOccupation';
import { createNewOccupationController } from '../useCases/occupations/createNewOccupation';

const occupationRouter = Router();
occupationRouter.post('/occupation', createNewOccupationController.handle);
// occupationRouter.get('/occupation', getAllOccupationsController.handle);
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
