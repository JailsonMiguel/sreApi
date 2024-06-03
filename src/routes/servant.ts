import { Router } from 'express';
import { createNewServantController } from '../useCases/servants/createNewServant';
import { getAllServantsController } from '../useCases/servants/getAllServants';
import { updateServantController } from '../useCases/servants/updateServant';
import { getServantByCpfController } from '../useCases/servants/getServantByCpf';

const servantRouter = Router();
servantRouter.post('/servant', createNewServantController.handle);
servantRouter.get('/servant', getAllServantsController.handle);
servantRouter.put('/servant/:servantId', updateServantController.handle);
servantRouter.get('/servant/:cpf', getServantByCpfController.handle);

export { servantRouter };
