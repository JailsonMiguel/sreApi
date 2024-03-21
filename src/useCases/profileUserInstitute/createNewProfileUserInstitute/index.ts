import { SequelizeInsertProfileUserInstituteRepository } from '../../../repositories/profileUserInstitute/insert/sequelizeInsertProfileUserInstituteRepository';
import { SequelizeSelectProfileUserInstituteRepository } from '../../../repositories/profileUserInstitute/select/sequelizeSelectProfileUserInstituteRepository';
import { CreateNewProfileUserInstituteController } from './createNewProfileUserInstituteController';
import { CreateNewProfileUserInstituteUseCase } from './createNewProfileUserInstituteUseCase';

const selectProfileUserInstituteRepository =
  new SequelizeSelectProfileUserInstituteRepository();
const insertProfileUserInstituteRepository =
  new SequelizeInsertProfileUserInstituteRepository();
const createNewProfileUserInstituteUseCase =
  new CreateNewProfileUserInstituteUseCase(
    insertProfileUserInstituteRepository,
    selectProfileUserInstituteRepository
  );
const createNewProfileUserInstituteController =
  new CreateNewProfileUserInstituteController(
    createNewProfileUserInstituteUseCase
  );

export {
  createNewProfileUserInstituteController,
  createNewProfileUserInstituteUseCase
};
