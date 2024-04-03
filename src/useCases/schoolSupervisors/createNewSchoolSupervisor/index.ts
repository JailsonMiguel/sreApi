import { SequelizeInsertSchoolSupervisorRepository } from '../../../repositories/schoolSupervisors/insert/sequelizeInsertSchoolSupervisorRepository';
import { SequelizeSelectSchoolSupervisorRepository } from '../../../repositories/schoolSupervisors/select/sequelizeSelectSchoolSupervisorRepository';
import { CreateNewSchoolSupervisorController } from './createNewSchoolSupervisorController';
import { CreateNewSchoolSupervisorUseCase } from './createNewSchoolSupervisorUseCase';

const selectSchoolSupervisorRepository =
  new SequelizeSelectSchoolSupervisorRepository();
const insertSchoolSupervisorRepository =
  new SequelizeInsertSchoolSupervisorRepository();
const createNewSchoolSupervisorUseCase = new CreateNewSchoolSupervisorUseCase(
  insertSchoolSupervisorRepository,
  selectSchoolSupervisorRepository
);
const createNewSchoolSupervisorController =
  new CreateNewSchoolSupervisorController(createNewSchoolSupervisorUseCase);

export {
  createNewSchoolSupervisorController,
  createNewSchoolSupervisorUseCase
};
