import { SequelizeSelectSupervisedSchoolRepository } from '../../../repositories/supervisedSchools/select/sequelizeSelectSupervisedSchoolsRepository';
import { GetAllSupervisedSchoolsController } from './getAllSupervisedSchoolsController';
import { GetAllSupervisedSchoolsUseCase } from './getAllSupervisorSchoolsUse';

const selectSupervisedSchoolRepository =
  new SequelizeSelectSupervisedSchoolRepository();
const getAllSupervisedSchoolsUseCase = new GetAllSupervisedSchoolsUseCase(
  selectSupervisedSchoolRepository
);
const getAllSupervisedSchoolsController = new GetAllSupervisedSchoolsController(
  getAllSupervisedSchoolsUseCase
);

export { getAllSupervisedSchoolsController, getAllSupervisedSchoolsUseCase };
