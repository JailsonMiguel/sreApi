import { ITypologyProps } from '../../../interfaces/props/ITypologyProps';
import { IInsertTypologyRepository } from '../../../interfaces/repositories/create/IInsertTypologyRepository';
import { ISelectTypologyRepository } from '../../../interfaces/repositories/select/ISelectTypologyInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewTypologyUseCase {
  private insertTypologyRepository: IInsertTypologyRepository;
  private selectTypologyRepository: ISelectTypologyRepository;
  constructor(
    insertTypologyRepository: IInsertTypologyRepository,
    selectTypologyRepository: ISelectTypologyRepository
  ) {
    this.insertTypologyRepository = insertTypologyRepository;
    this.selectTypologyRepository = selectTypologyRepository;
  }
  async handle(typologyProps: ITypologyProps) {
    const typologyAlredyExists =
      await this.selectTypologyRepository.verifyIfAlredyActiveByPositionAndRegional(
        typologyProps
      );
    if (typologyAlredyExists) {
      throw new sreError('Tipologia já cadastrada', 'Tipologia já cadastrada');
    } else {
      const createdTypology =
        await this.insertTypologyRepository.createTypology(typologyProps);
      return createdTypology;
    }
  }
}
