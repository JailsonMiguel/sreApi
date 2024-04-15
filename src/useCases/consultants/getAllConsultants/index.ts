import { SequelizeSelectConsultantRepository } from '../../../repositories/consultants/select/sequelizeSelectConsultantRepository';
import { GetAllConsultantsController } from './getAllConsultantsController';
import { GetAllConsultantsUseCase } from './getAllConsultantsUseCase';

const selectConsultantRepository = new SequelizeSelectConsultantRepository();
const getAllConsultantsUseCase = new GetAllConsultantsUseCase(
  selectConsultantRepository
);
const getAllConsultantsController = new GetAllConsultantsController(
  getAllConsultantsUseCase
);

export { getAllConsultantsController, getAllConsultantsUseCase };
