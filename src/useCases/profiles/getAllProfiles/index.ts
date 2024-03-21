import { SequelizeSelectProfileRepository } from '../../../repositories/profiles/select/sequelizeSelectProfileRepository';
import { GetAllProfilesController } from './getAllProfilesController';
import { GetAllProfilesUseCase } from './getAllProfilesUseCase';

const selectProfileRepository = new SequelizeSelectProfileRepository();
const getAllProfilesUseCase = new GetAllProfilesUseCase(
  selectProfileRepository
);
const getAllProfilesController = new GetAllProfilesController(
  getAllProfilesUseCase
);

export { getAllProfilesController, getAllProfilesUseCase };
