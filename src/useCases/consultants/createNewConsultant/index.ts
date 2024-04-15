import { SequelizeInsertConsultantRepository } from '../../../repositories/consultants/insert/sequelizeInsertConsultantRepository';
import { SequelizeSelectConsultantRepository } from '../../../repositories/consultants/select/sequelizeSelectConsultantRepository';
import { CreateNewConsultantController } from './createNewConsultantController';
import { CreateNewConsultantUseCase } from './createNewConsultantUseCase';

const selectConsultantRepository = new SequelizeSelectConsultantRepository();
const insertConsultantRepository = new SequelizeInsertConsultantRepository();
const createNewConsultantUseCase = new CreateNewConsultantUseCase(
  insertConsultantRepository,
  selectConsultantRepository
);
const createNewConsultantController = new CreateNewConsultantController(
  createNewConsultantUseCase
);

export { createNewConsultantController, createNewConsultantUseCase };
