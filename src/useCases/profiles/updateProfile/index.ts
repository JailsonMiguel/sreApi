import { SequelizeUpdateProfileRepository } from '../../../repositories/profiles/update/sequelizeUpdateProfileRepository';
import { UpdateProfileController } from './updateProfileController';
import { UpdateProfileUseCase } from './updateProfileUseCase';

const updateProfileRepository = new SequelizeUpdateProfileRepository();
const updateProfileUseCase = new UpdateProfileUseCase(updateProfileRepository);
const updateProfileController = new UpdateProfileController(
  updateProfileUseCase
);

export { updateProfileController, updateProfileUseCase };
