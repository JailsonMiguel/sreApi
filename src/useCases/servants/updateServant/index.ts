import { SequelizeUpdateServantRepository } from '../../../repositories/servants/update/sequelizeUpdateServantRepository';
import { UpdateServantController } from './updateServantController';
import { UpdateServantUseCase } from './updateServantUseCase';

const updateServantRepository = new SequelizeUpdateServantRepository();
const updateServantUseCase = new UpdateServantUseCase(updateServantRepository);
const updateServantController = new UpdateServantController(
  updateServantUseCase
);

export { updateServantController, updateServantUseCase };
