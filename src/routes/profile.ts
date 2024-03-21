import { Router } from 'express';
import { createNewProfileController } from '../useCases/profiles/createNewProfile';
import { getAllProfilesController } from '../useCases/profiles/getAllProfiles';
import { updateProfileController } from '../useCases/profiles/updateProfile';

const profileRouter = Router();
profileRouter.post('/profile', createNewProfileController.handle);
profileRouter.get('/profile', getAllProfilesController.handle);
profileRouter.put('/profile/:profileId', updateProfileController.handle);

export { profileRouter };
