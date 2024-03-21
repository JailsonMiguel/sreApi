import { SequelizeUpdateInstituteRepository } from '../../../repositories/institutes/update/sequelizeUpdateInstituteRepository';
import { UpdateInstituteController } from './updateInstituteController';
import { UpdateInstituteUseCase } from './updateInstituteUseCase';

const updateInstituteRepository = new SequelizeUpdateInstituteRepository();
const updateInstituteUseCase = new UpdateInstituteUseCase(
  updateInstituteRepository
);
const updateInstituteController = new UpdateInstituteController(
  updateInstituteUseCase
);

export { updateInstituteController, updateInstituteUseCase };
