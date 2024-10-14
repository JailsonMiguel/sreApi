import { IServantProps } from '../../../interfaces/props/IServantProps';
import { IInsertServantRepository } from '../../../interfaces/repositories/create/IInsertServantRepository';
import { ISelectServantRepository } from '../../../interfaces/repositories/select/ISelectServantInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewServantUseCase {
  private insertServantRepository: IInsertServantRepository;
  private selectServantRepository: ISelectServantRepository;
  constructor(
    insertServantRepository: IInsertServantRepository,
    selectServantRepository: ISelectServantRepository
  ) {
    this.insertServantRepository = insertServantRepository;
    this.selectServantRepository = selectServantRepository;
  }
  async handle(servantProps: IServantProps) {
    const servantAlredyExists =
      await this.selectServantRepository.verifyIfAlredyByUserRegional(
        servantProps
      );
    if (servantAlredyExists) {
      throw new sreError(
        'Servidor já cadastrado nesta regional',
        'Servidor já cadastrado nesta regional'
      );
    } else {
      const createdServant =
        await this.insertServantRepository.createServant(servantProps);
      return createdServant;
    }
  }
}
