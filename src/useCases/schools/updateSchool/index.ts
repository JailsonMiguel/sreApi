import { SequelizeUpdateSchoolRepository } from '../../../repositories/schools/update/sequelizeUpdateSchoolRepository';
import { UpdateSchoolController } from './updateSchoolController';
import { UpdateSchoolUseCase } from './updateSchoolUseCase';

const updateSchoolRepository = new SequelizeUpdateSchoolRepository();
const updateSchoolUseCase = new UpdateSchoolUseCase(updateSchoolRepository);
const updateSchoolController = new UpdateSchoolController(updateSchoolUseCase);

export { updateSchoolController, updateSchoolUseCase };
