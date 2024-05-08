import { Router } from 'express';
import { getAllSuperintendentsController } from '../useCases/superintendent/getAllSuperintendents';
import { updateSuperintendentController } from '../useCases/superintendent/updateSuperintendent';
import { createNewSuperintendentController } from '../useCases/superintendent/createNewSuperintendent';
import { getAllSuperintendentsByRegionalIdController } from '../useCases/superintendent/getByRegional';

const superintendentRouter = Router();
superintendentRouter.post(
  '/superintendent',
  createNewSuperintendentController.handle
);
superintendentRouter.get(
  '/superintendent',
  getAllSuperintendentsController.handle
);
superintendentRouter.put(
  '/superintendent/:superintendentId',
  updateSuperintendentController.handle
);
superintendentRouter.get(
  '/superintendent/:regionalId',
  getAllSuperintendentsByRegionalIdController.handle
);

export { superintendentRouter };
