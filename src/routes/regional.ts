import { Router } from 'express';
import { createNewRegionalController } from '../useCases/regionals/createNewRegional';
import { getAllRegionalsController } from '../useCases/regionals/getAllRegionals';
import { updateRegionalController } from '../useCases/regionals/updateRegional';
import { getAllRegionalAndSuperintendentsController } from '../useCases/regionals/getRegionalAndServant';

const regionalRouter = Router();
regionalRouter.post('/regional', createNewRegionalController.handle);
regionalRouter.get('/regional', getAllRegionalsController.handle);
regionalRouter.put('/regional/:regionalId', updateRegionalController.handle);
regionalRouter.get(
  '/regional/superintendent',
  getAllRegionalAndSuperintendentsController.handle
);

export { regionalRouter };
