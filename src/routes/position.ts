import { Router } from 'express';
import { createNewPositionController } from '../useCases/positions/createNewPosition';
import { getAllPositionsController } from '../useCases/positions/getAllPositions';
import { updatePositionController } from '../useCases/positions/updatePosition';
import { getAllPositionsByTeamIdController } from '../useCases/positions/getByTeam';
import { getPositionByCodeController } from '../useCases/positions/getByCode';

const positionRouter = Router();
positionRouter.post('/position', createNewPositionController.handle);
positionRouter.get('/position', getAllPositionsController.handle);
positionRouter.put('/position/:positionId', updatePositionController.handle);
positionRouter.get(
  '/position/:teamId',
  getAllPositionsByTeamIdController.handle
);
positionRouter.get('/position-code/:code', getPositionByCodeController.handle);

export { positionRouter };
