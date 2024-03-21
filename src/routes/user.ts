import { Router } from 'express';
import { createNewUserController } from '../useCases/users/createNewUser';
import { getAllUsersController } from '../useCases/users/getAllUsers';
import { updateUserController } from '../useCases/users/updateUser';

const userRouter = Router();
userRouter.post('/user', createNewUserController.handle);
userRouter.get('/user', getAllUsersController.handle);
userRouter.put('/user/:userId', updateUserController.handle);

export { userRouter };
