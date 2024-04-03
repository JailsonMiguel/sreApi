import { SequelizeUpdateSchoolSupervisorRepository } from '../../../repositories/schoolSupervisors/update/sequelizeUpdateSchoolSupervisorRepository';
import { UpdateSchoolSupervisorController } from './updateSchoolSupervisorController';
import { UpdateSchoolSupervisorUseCase } from './updateSchoolSupervisorUseCase';

const updateSchoolSupervisorRepository =
  new SequelizeUpdateSchoolSupervisorRepository();
const updateSchoolSupervisorUseCase = new UpdateSchoolSupervisorUseCase(
  updateSchoolSupervisorRepository
);
const updateSchoolSupervisorController = new UpdateSchoolSupervisorController(
  updateSchoolSupervisorUseCase
);

export { updateSchoolSupervisorController, updateSchoolSupervisorUseCase };
