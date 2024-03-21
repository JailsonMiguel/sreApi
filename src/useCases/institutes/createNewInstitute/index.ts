import { SequelizeInsertInstituteRepository } from '../../../repositories/institutes/insert/sequelizeInsertInstituteRepository';
import { SequelizeSelectInstituteRepository } from '../../../repositories/institutes/select/sequelizeSelectInstituteRepository';
import { CreateNewInstituteController } from './createNewInstituteController';
import { CreateNewInstituteUseCase } from './createNewInstituteUseCase';

const selectInstituteRepository = new SequelizeSelectInstituteRepository();
const insertInstituteRepository = new SequelizeInsertInstituteRepository();
const createNewInstituteUseCase = new CreateNewInstituteUseCase(
  insertInstituteRepository,
  selectInstituteRepository
);
const createNewInstituteController = new CreateNewInstituteController(
  createNewInstituteUseCase
);

export { createNewInstituteController, createNewInstituteUseCase };
