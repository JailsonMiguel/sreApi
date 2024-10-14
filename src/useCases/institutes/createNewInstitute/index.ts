import { SequelizeInsertInstituteRepository } from '../../../repositories/create/sequelizeInsertInstituteRepository';
import { SequelizeSelectInstituteRepository } from '../../../repositories/select/sequelizeSelectInstituteRepository';
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
