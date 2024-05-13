import { SequelizeUpdateOccupationRepository } from '../../../repositories/occupations/update/sequelizeUpdateOccupationRepository';
import { UpdateOccupationController } from './updateOccupationController';
import { UpdateOccupationUseCase } from './updateOccupationUseCase';

const updateOccupationRepository = new SequelizeUpdateOccupationRepository();
const updateOccupationUseCase = new UpdateOccupationUseCase(
  updateOccupationRepository
);
const updateOccupationController = new UpdateOccupationController(
  updateOccupationUseCase
);

export { updateOccupationController, updateOccupationUseCase };
