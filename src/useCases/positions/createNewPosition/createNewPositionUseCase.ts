import { IPositionProps } from '../../../interfaces/props/IPositionProps';
import { IInsertPositionRepository } from '../../../interfaces/repositories/create/IInsertPositionRepository';
import { ISelectPositionRepository } from '../../../interfaces/repositories/select/ISelectPositionInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewPositionUseCase {
  private insertPositionRepository: IInsertPositionRepository;
  private selectPositionRepository: ISelectPositionRepository;
  constructor(
    insertPositionRepository: IInsertPositionRepository,
    selectPositionRepository: ISelectPositionRepository
  ) {
    this.insertPositionRepository = insertPositionRepository;
    this.selectPositionRepository = selectPositionRepository;
  }
  async handle(positionProps: IPositionProps) {
    const positionAlredyExists =
      await this.selectPositionRepository.verifyIfAlredyBySubarea(
        positionProps
      );
    if (positionAlredyExists) {
      throw new sreError('Função já cadastrada', 'Função já cadastrada');
    } else {
      const createdPosition =
        await this.insertPositionRepository.createPosition(positionProps);
      return createdPosition;
    }
  }
}
