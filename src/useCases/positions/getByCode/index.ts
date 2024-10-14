import { SequelizeSelectPositionRepository } from '../../../repositories/select/sequelizeSelectPositionRepository';
import { GetPositionByCodeController } from './getByCodeController';
import { GetByCodeUseCase } from './getByCodeUseCase';

const selectPositionByCodeRepository = new SequelizeSelectPositionRepository();
const getPositionByCodeUseCase = new GetByCodeUseCase(
  selectPositionByCodeRepository
);
const getPositionByCodeController = new GetPositionByCodeController(
  getPositionByCodeUseCase
);

export { getPositionByCodeController, getPositionByCodeUseCase };
