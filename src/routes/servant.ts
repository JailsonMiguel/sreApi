import { Router } from 'express';
import { createNewServantController } from '../useCases/servants/createNewServant';
import { getAllServantsController } from '../useCases/servants/getAllServants';
import { updateServantController } from '../useCases/servants/updateServant';

const servantRouter = Router();
servantRouter.post('/servant', createNewServantController.handle);
servantRouter.get('/servant', getAllServantsController.handle);
servantRouter.put('/servant/:servantId', updateServantController.handle);

export { servantRouter };
