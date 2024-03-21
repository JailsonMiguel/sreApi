import { SequelizeUpdateProfileUserInstituteRepository } from '../../../repositories/profileUserInstitute/update/sequelizeUpdateProfileUserInstituteRepository';
import { UpdateProfileUserInstituteController } from './updateProfileUserInstituteController';
import { UpdateProfileUserInstituteUseCase } from './updateProfileUserInstituteUseCase';

const updateProfileUserInstituteRepository =
  new SequelizeUpdateProfileUserInstituteRepository();
const updateProfileUserInstituteUseCase = new UpdateProfileUserInstituteUseCase(
  updateProfileUserInstituteRepository
);
const updateProfileUserInstituteController =
  new UpdateProfileUserInstituteController(updateProfileUserInstituteUseCase);

export {
  updateProfileUserInstituteController,
  updateProfileUserInstituteUseCase
};
