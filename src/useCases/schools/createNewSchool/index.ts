import { SequelizeInsertSchoolRepository } from '../../../repositories/schools/insert/sequelizeInsertSchoolRepository';
import { SequelizeSelectSchoolRepository } from '../../../repositories/schools/select/sequelizeSelectSchoolRepository';
import { CreateNewSchoolController } from './createNewSchoolController';
import { CreateNewSchoolUseCase } from './createNewSchoolUseCase';

const selectSchoolRepository = new SequelizeSelectSchoolRepository();
const insertSchoolRepository = new SequelizeInsertSchoolRepository();
const createNewSchoolUseCase = new CreateNewSchoolUseCase(
  insertSchoolRepository,
  selectSchoolRepository
);
const createNewSchoolController = new CreateNewSchoolController(
  createNewSchoolUseCase
);

export { createNewSchoolController, createNewSchoolUseCase };
