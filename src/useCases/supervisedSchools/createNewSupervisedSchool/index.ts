import { SequelizeInsertSupervisedSchoolRepository } from '../../../repositories/supervisedSchools/create/sequelizeInsertSupervisedSchoolRepository';
import { SequelizeSelectSupervisedSchoolRepository } from '../../../repositories/supervisedSchools/select/sequelizeSelectSupervisedSchoolsRepository';
import { CreateNewSupervisedSchoolController } from './createNewSupervisedSchoolController';
import { CreateNewSupervisedSchoolUseCase } from './createNewSupervisedSchoolUseCase';

const selectSupervisedSchoolRepository =
  new SequelizeSelectSupervisedSchoolRepository();
const insertSupervisedSchoolRepository =
  new SequelizeInsertSupervisedSchoolRepository();
const createNewSupervisedSchoolUseCase = new CreateNewSupervisedSchoolUseCase(
  insertSupervisedSchoolRepository,
  selectSupervisedSchoolRepository
);
const createNewSupervisedSchoolController =
  new CreateNewSupervisedSchoolController(createNewSupervisedSchoolUseCase);

export {
  createNewSupervisedSchoolController,
  createNewSupervisedSchoolUseCase
};
