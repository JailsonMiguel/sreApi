import { SequelizeUpdateSupervisedSchoolRepository } from '../../../repositories/supervisedSchools/update/sequelizeUpdateSupervisedSchoolRepository';
import { UpdateSupervisedSchoolController } from './updateSupervisedSchoolController';
import { UpdateSupervisedSchoolUseCase } from './updateSupervisedSchoolUseCase';

const updateSupervisedSchoolRepository =
  new SequelizeUpdateSupervisedSchoolRepository();
const updateSupervisedSchoolUseCase = new UpdateSupervisedSchoolUseCase(
  updateSupervisedSchoolRepository
);
const updateSupervisedSchoolController = new UpdateSupervisedSchoolController(
  updateSupervisedSchoolUseCase
);

export { updateSupervisedSchoolController, updateSupervisedSchoolUseCase };
