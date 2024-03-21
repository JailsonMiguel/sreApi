import { Router } from 'express';
import { createNewPositionController } from '../useCases/positions/createNewPosition';
import { getAllPositionsController } from '../useCases/positions/getAllPositions';
import { updatePositionController } from '../useCases/positions/updatePosition';

const positionRouter = Router();
positionRouter.post('/position', createNewPositionController.handle);
positionRouter.get('/position', getAllPositionsController.handle);
positionRouter.put('/position/:positionId', updatePositionController.handle);

export { positionRouter };
