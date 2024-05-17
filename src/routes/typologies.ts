import { Router } from 'express';
import { createNewTypologyController } from '../useCases/typologies/createNewTypology';
import { getAllTypologiesController } from '../useCases/typologies/getAllTypologies';
import { updateTypologyController } from '../useCases/typologies/updateTypology';
import { getAllTByRegionalAndPositionController } from '../useCases/typologies/getByRegionalAndPosition';
import { getActiveByRegionalAndPositionController } from '../useCases/typologies/getActiveByRegionalAndPosition';

const typologyRouter = Router();
typologyRouter.post('/typology', createNewTypologyController.handle);
typologyRouter.get('/typology', getAllTypologiesController.handle);
typologyRouter.put('/typology/:typologyId', updateTypologyController.handle);
typologyRouter.get(
  '/typology/:instituteId/:positionId',
  getAllTByRegionalAndPositionController.handle
);
typologyRouter.get(
  '/typology/:instituteId/:positionId/:isActive',
  getActiveByRegionalAndPositionController.handle
);

export { typologyRouter };
