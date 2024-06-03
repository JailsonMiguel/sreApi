import { SequelizeSelectServantRepository } from '../../../repositories/servants/select/sequelizeSelectServantRepository';
import { GetServantByCpfController } from './getServantByCpfController';
import { GetServantByCpfUseCase } from './getServantByCpfUseCase';

const selectServantByCpfRepository = new SequelizeSelectServantRepository();
const getServantByCpfUseCase = new GetServantByCpfUseCase(
  selectServantByCpfRepository
);
const getServantByCpfController = new GetServantByCpfController(
  getServantByCpfUseCase
);

export { getServantByCpfController, getServantByCpfUseCase };
