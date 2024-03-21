import { SequelizeSelectProfileUserInstituteRepository } from '../../../repositories/profileUserInstitute/select/sequelizeSelectProfileUserInstituteRepository';
import { GetAllProfilesUsersInstitutesController } from './getAllProfilesUsersInstitutesController';
import { GetAllProfilesUsersInstitutesUseCase } from './getAllProfilesUsersInstitutesUseCase';

const selectProfileUserInstituteRepository =
  new SequelizeSelectProfileUserInstituteRepository();
const getAllProfilesUsersInsitutesUseCase =
  new GetAllProfilesUsersInstitutesUseCase(
    selectProfileUserInstituteRepository
  );
const getAllProfilesUsersInsitutesController =
  new GetAllProfilesUsersInstitutesController(
    getAllProfilesUsersInsitutesUseCase
  );

export {
  getAllProfilesUsersInsitutesController,
  getAllProfilesUsersInsitutesUseCase
};
