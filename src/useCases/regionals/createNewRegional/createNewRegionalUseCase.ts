import { IRegionalProps } from '../../../interfaces/props/IRegionalProps';
import { IInsertRegionalRepository } from '../../../interfaces/repositories/create/IInsertRegionalRepository';
import { ISelectRegionalRepository } from '../../../interfaces/repositories/select/ISelectRegionalInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewRegionalUseCase {
  private insertRegionalRepository: IInsertRegionalRepository;
  private selectRegionalRepository: ISelectRegionalRepository;
  constructor(
    insertRegionalRepository: IInsertRegionalRepository,
    selectRegionalRepository: ISelectRegionalRepository
  ) {
    this.insertRegionalRepository = insertRegionalRepository;
    this.selectRegionalRepository = selectRegionalRepository;
  }
  async handle(regionalProps: IRegionalProps) {
    const regionalAlredyExists =
      await this.selectRegionalRepository.verifyIfAlredyByInstitute(
        regionalProps
      );
    if (regionalAlredyExists) {
      throw new sreError(
        'Superintendência Regional já cadastrada',
        'Superintendência Regional já cadastrada'
      );
    } else {
      const createdRegional =
        await this.insertRegionalRepository.createRegional(regionalProps);
      return createdRegional;
    }
  }
}
