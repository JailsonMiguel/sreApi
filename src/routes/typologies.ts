import { Router } from 'express';
import { createNewTypologyController } from '../useCases/typologies/createNewTypology';
import { getAllTypologiesController } from '../useCases/typologies/getAllTypologies';
import { updateTypologyController } from '../useCases/typologies/updateTypology';

const typologyRouter = Router();
typologyRouter.post('/typology', createNewTypologyController.handle);
typologyRouter.get('/typology', getAllTypologiesController.handle);
typologyRouter.put('/typology/:typologyId', updateTypologyController.handle);

export { typologyRouter };
