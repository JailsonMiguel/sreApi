import { ISelectTypologyRepository } from "../../../interfaces/repositories/select/ISelectTypologyInterface";

export class GetActiveByRegionalAndPositionUseCase {
  private selectTypologyRepository: ISelectTypologyRepository;
  constructor(selectTypologyRepository: ISelectTypologyRepository) {
    this.selectTypologyRepository = selectTypologyRepository;
  }
  async handle(instituteId: number, positionId: number) {
    const listTypologiesActive =
      await this.selectTypologyRepository.getActiveByRegionalAndPosition(
        instituteId,
        positionId
      );
    console.log(listTypologiesActive);
    return listTypologiesActive;
  }
}
