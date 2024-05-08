import { SequelizeUpdateSuperintendentRepository } from '../../../repositories/superintendents/update/sequelizeUpdateSuperintendentRepository';
import { UpdateSuperintendentController } from './updateSchoolSupervisorController';
import { UpdateSuperintendentUseCase } from './updateSchoolSupervisorUseCase';

const updateSuperintendentRepository =
  new SequelizeUpdateSuperintendentRepository();
const updateSuperintendentUseCase = new UpdateSuperintendentUseCase(
  updateSuperintendentRepository
);
const updateSuperintendentController = new UpdateSuperintendentController(
  updateSuperintendentUseCase
);

export { updateSuperintendentController, updateSuperintendentUseCase };
