import { IOccupationProps } from '../../../interfaces/props/IOccupationProps';
import { IInsertOccupationRepository } from '../../../interfaces/repositories/create/IInsertOccupationRepository';
import { ISelectOccupationRepository } from '../../../interfaces/repositories/select/ISelectOccupationInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewOccupationUseCase {
  private insertOccupationRepository: IInsertOccupationRepository;
  private selectOccupationRepository: ISelectOccupationRepository;
  constructor(
    insertOccupationRepository: IInsertOccupationRepository,
    selectOccupationRepository: ISelectOccupationRepository
  ) {
    this.insertOccupationRepository = insertOccupationRepository;
    this.selectOccupationRepository = selectOccupationRepository;
  }
  async handle(occupationProps: IOccupationProps) {
    const occupationAlredyExists =
      await this.selectOccupationRepository.verifyIfAlredyActiveByPositionAndInstituteAndServant(
        occupationProps
      );
    if (occupationAlredyExists) {
      throw new sreError('Tipologia já cadastrada', 'Tipologia já cadastrada');
    } else {
      const createdOccupation =
        await this.insertOccupationRepository.createOccupation(occupationProps);
      return createdOccupation;
    }
  }
}
