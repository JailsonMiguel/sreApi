import { SequelizeUpdateRegionalRepository } from '../../../repositories/regionals/update/sequelizeUpdateRegionalRepository';
import { UpdateRegionalController } from './updateRegionalController';
import { UpdateRegionalUseCase } from './updateRegionalUseCase';

const updateRegionalRepository = new SequelizeUpdateRegionalRepository();
const updateRegionalUseCase = new UpdateRegionalUseCase(
  updateRegionalRepository
);
const updateRegionalController = new UpdateRegionalController(
  updateRegionalUseCase
);

export { updateRegionalController, updateRegionalUseCase };
