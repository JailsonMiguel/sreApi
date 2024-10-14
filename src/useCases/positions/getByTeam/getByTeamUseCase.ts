import { ISelectPositionRepository } from '../../../interfaces/repositories/select/ISelectPositionInterface';

export class GetByTeamIdUseCase {
  private selectPositionRepository: ISelectPositionRepository;
  constructor(selectPositionRepository: ISelectPositionRepository) {
    this.selectPositionRepository = selectPositionRepository;
  }

  async handle(teamtId: number) {
    const listPositions =
      await this.selectPositionRepository.getPositionByTeamId(teamtId);
    console.log(listPositions);
    return listPositions;
  }
}
