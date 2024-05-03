import { ISelectTypologyRepository } from '../../../repositories/typologies/select/ISelectTypologyInterface';

export class GetActiveByRegionalAndPositionUseCase {
  private selectTypologyRepository: ISelectTypologyRepository;
  constructor(selectTypologyRepository: ISelectTypologyRepository) {
    this.selectTypologyRepository = selectTypologyRepository;
  }
  async handle(regionalId: number, positionId: number) {
    const listTypologiesActive =
      await this.selectTypologyRepository.getActiveByRegionalAndPosition(
        regionalId,
        positionId
      );
    console.log(listTypologiesActive);
    return listTypologiesActive;
  }
}
