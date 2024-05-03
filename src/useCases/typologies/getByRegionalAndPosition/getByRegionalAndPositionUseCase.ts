import { ISelectTypologyRepository } from '../../../repositories/typologies/select/ISelectTypologyInterface';

export class GetByRegionalAndPositionUseCase {
  private selectTypologyRepository: ISelectTypologyRepository;
  constructor(selectTypologyRepository: ISelectTypologyRepository) {
    this.selectTypologyRepository = selectTypologyRepository;
  }

  async handle(regionalId: number, positionId: number) {
    const listTypologies =
      await this.selectTypologyRepository.getAllTypologyByRegionalAndPosition(
        regionalId,
        positionId
      );
    console.log(listTypologies);
    return listTypologies;
  }
}
