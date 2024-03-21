import { IInstituteProps } from '../../../interfaces/props/IInstituteProps';
import { IInsertInstituteRepository } from '../../../repositories/institutes/insert/IInsertInstituteRepository';
import { ISelectInstituteRepository } from '../../../repositories/institutes/select/ISelectInstituteInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewInstituteUseCase {
  private insertInstituteRepository: IInsertInstituteRepository;
  private selectInstituteRepository: ISelectInstituteRepository;
  constructor(
    insertInstituteRepository: IInsertInstituteRepository,
    selectInstituteRepository: ISelectInstituteRepository
  ) {
    this.insertInstituteRepository = insertInstituteRepository;
    this.selectInstituteRepository = selectInstituteRepository;
  }
  async handle(instituteProps: IInstituteProps) {
    const instituteAlredyExists =
      await this.selectInstituteRepository.verifyIfAlredyByName(instituteProps);
    if (instituteAlredyExists) {
      throw new sreError('Instituto já cadastrado', 'Instituto já cadastrado');
    } else {
      const createdInstitute =
        await this.insertInstituteRepository.create(instituteProps);
      return createdInstitute;
    }
  }
}
