import { SequelizeSelectSchoolRepository } from '../../../repositories/select/sequelizeSelectSchoolRepository';
import { GetAllSchoolsController } from './getAllSchoolsController';
import { GetAllSchoolsUseCase } from './getAllSchoolsUseCase';

const selectSchoolRepository = new SequelizeSelectSchoolRepository();
const getAllSchoolsUseCase = new GetAllSchoolsUseCase(selectSchoolRepository);
const getAllSchoolsController = new GetAllSchoolsController(
  getAllSchoolsUseCase
);

export { getAllSchoolsController, getAllSchoolsUseCase };
