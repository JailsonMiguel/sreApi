import { SequelizeUpdateConsultantRepository } from '../../../repositories/consultants/update/sequelizeUpdateConsultantRepository';
import { UpdateConsultantController } from './updateConsultantController';
import { UpdateConsultantUseCase } from './updateConsultantUseCase';

const updateConsultantRepository = new SequelizeUpdateConsultantRepository();
const updateConsultantUseCase = new UpdateConsultantUseCase(
  updateConsultantRepository
);
const updateConsultantController = new UpdateConsultantController(
  updateConsultantUseCase
);

export { updateConsultantController, updateConsultantUseCase };
