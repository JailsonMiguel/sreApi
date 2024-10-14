import { SequelizeUpdateTypologyRepository } from '../../../repositories/update/sequelizeUpdateTypologyRepository';
import { UpdateTypologyUseCase } from './updateTypologyUseCase';
import { UpdateTypologyController } from './updateTypologyController';

const updateTypologyRepository = new SequelizeUpdateTypologyRepository();
const updateTypologyUseCase = new UpdateTypologyUseCase(
  updateTypologyRepository
);
const updateTypologyController = new UpdateTypologyController(
  updateTypologyUseCase
);

export { updateTypologyController, updateTypologyUseCase };
