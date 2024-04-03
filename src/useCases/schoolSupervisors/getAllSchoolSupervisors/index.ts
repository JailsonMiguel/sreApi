import { SequelizeSelectSchoolSupervisorRepository } from '../../../repositories/schoolSupervisors/select/sequelizeSelectSchoolSupervisorRepository';
import { GetAllSchoolSupervisorsController } from './getAllSchoolSupervisorsController';
import { GetAllSchoolSupervisorsUseCase } from './getAllSchoolSupervisorsUseCase';

const selectSchoolSupervisorRepository =
  new SequelizeSelectSchoolSupervisorRepository();
const getAllSchoolSupervisorsUseCase = new GetAllSchoolSupervisorsUseCase(
  selectSchoolSupervisorRepository
);
const getAllSchoolSupervisorsController = new GetAllSchoolSupervisorsController(
  getAllSchoolSupervisorsUseCase
);

export { getAllSchoolSupervisorsController, getAllSchoolSupervisorsUseCase };
