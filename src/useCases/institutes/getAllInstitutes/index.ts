import { SequelizeSelectInstituteRepository } from '../../../repositories/select/sequelizeSelectInstituteRepository';
import { GetAllInstitutesController } from './getAllInstitutesController';
import { GetAllInstitutesUseCase } from './getAllInstitutesUseCase';

const selectInstituteRepository = new SequelizeSelectInstituteRepository();
const getAllInstitutesUseCase = new GetAllInstitutesUseCase(
  selectInstituteRepository
);
const getAllInstitutesController = new GetAllInstitutesController(
  getAllInstitutesUseCase
);

export { getAllInstitutesController, getAllInstitutesUseCase };
