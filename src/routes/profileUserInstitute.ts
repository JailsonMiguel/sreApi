import { Router } from 'express';
import { getAllProfilesUsersInsitutesController } from '../useCases/profileUserInstitute/getAllProfilesUsersInstitutes';
import { createNewProfileUserInstituteController } from '../useCases/profileUserInstitute/createNewProfileUserInstitute';
import { updateProfileUserInstituteController } from '../useCases/profileUserInstitute/updateProfileUserInstitute';

const profileUserInstituteRouter = Router();
profileUserInstituteRouter.post(
  '/profile-user-institute',
  createNewProfileUserInstituteController.handle
);
profileUserInstituteRouter.get(
  '/profile-user-institute',
  getAllProfilesUsersInsitutesController.handle
);
profileUserInstituteRouter.put(
  '/profile-user-institute/:profileUserInstituteId',
  updateProfileUserInstituteController.handle
);

export { profileUserInstituteRouter };
