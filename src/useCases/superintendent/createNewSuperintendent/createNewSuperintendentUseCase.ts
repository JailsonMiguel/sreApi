import { ISuperintendentProps } from '../../../interfaces/props/ISuperintendentProps';
import { IInsertSuperintendentRepository } from '../../../repositories/superintendents/insert/IInsertSuperintendentRepository';
import { ISelectSuperintendentRepository } from '../../../repositories/superintendents/select/ISelectSuperintendentInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewSuperintendentUseCase {
  private insertSuperintendentRepository: IInsertSuperintendentRepository;
  private selectSuperintendentRepository: ISelectSuperintendentRepository;
  constructor(
    insertSuperintendentRepository: IInsertSuperintendentRepository,
    selectSuperintendentRepository: ISelectSuperintendentRepository
  ) {
    this.insertSuperintendentRepository = insertSuperintendentRepository;
    this.selectSuperintendentRepository = selectSuperintendentRepository;
  }
  async handle(superintendentProps: ISuperintendentProps) {
    const superintendentAlredyExists =
      await this.selectSuperintendentRepository.verifyIfAlredyByRegional(
        superintendentProps
      );
    if (superintendentAlredyExists) {
      throw new sreError(
        'Superintendente já vinculado a esta SRE',
        'Superintendente já vinculado a esta SRE'
      );
    } else {
      const createdSuperintendent =
        await this.insertSuperintendentRepository.createSuperintendent(
          superintendentProps
        );
      return createdSuperintendent;
    }
  }
}
