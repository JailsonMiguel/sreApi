import { SequelizeUpdatePositionRepository } from '../../../repositories/positions/update/sequelizeUpdatePositionRepository';
import { UpdatePositionController } from './updatePositionController';
import { UpdatePositionUseCase } from './updatePositionUseCase';

const updatePositionRepository = new SequelizeUpdatePositionRepository();
const updatePositionUseCase = new UpdatePositionUseCase(
  updatePositionRepository
);
const updatePositionController = new UpdatePositionController(
  updatePositionUseCase
);

export { updatePositionController, updatePositionUseCase };
