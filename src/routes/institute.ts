import { Router } from 'express';
import { getAllInstitutesController } from '../useCases/institutes/getAllInstitutes';
import { updateInstituteController } from '../useCases/institutes/updateInstitute';
import { createNewInstituteController } from '../useCases/institutes/createNewInstitute';

const instituteRouter = Router();
instituteRouter.post('/institute', createNewInstituteController.handle);
instituteRouter.get('/institute', getAllInstitutesController.handle);
instituteRouter.put(
  '/institute/:instituteId',
  updateInstituteController.handle
);

export { instituteRouter };
