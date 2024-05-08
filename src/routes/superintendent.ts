import { Router } from 'express';
import { getAllSuperintendentsController } from '../useCases/superintendent/getAllSuperintendents';
import { updateSuperintendentController } from '../useCases/superintendent/updateSuperintendent';
import { createNewSuperintendentController } from '../useCases/superintendent/createNewSuperintendent';

const superintendentsorRouter = Router();
superintendentsorRouter.post(
  '/superintendent',
  createNewSuperintendentController.handle
);
superintendentsorRouter.get(
  '/superintendent',
  getAllSuperintendentsController.handle
);
superintendentsorRouter.put(
  '/superintendent/:superintendentId',
  updateSuperintendentController.handle
);

export { superintendentsorRouter };
