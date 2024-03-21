import { Router } from 'express';
import { createNewRegionalController } from '../useCases/regionals/createNewRegional';
import { getAllRegionalsController } from '../useCases/regionals/getAllRegionals';
import { updateRegionalController } from '../useCases/regionals/updateRegional';

const regionalRouter = Router();
regionalRouter.post('/regional', createNewRegionalController.handle);
regionalRouter.get('/regional', getAllRegionalsController.handle);
regionalRouter.put('/regional/:regionalId', updateRegionalController.handle);

export { regionalRouter };
