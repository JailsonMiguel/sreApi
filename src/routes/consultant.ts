import { Router } from 'express';
import { createNewConsultantController } from '../useCases/consultants/createNewConsultant';
import { getAllConsultantsController } from '../useCases/consultants/getAllConsultants';
import { updateConsultantController } from '../useCases/consultants/updateConsultant';

const consultantRouter = Router();
consultantRouter.post('/consultant', createNewConsultantController.handle);
consultantRouter.get('/consultant', getAllConsultantsController.handle);
consultantRouter.put(
  '/consultant/:consultantId',
  updateConsultantController.handle
);

export { consultantRouter };
