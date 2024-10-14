import { ISelectTypologyRepository } from "../../../interfaces/repositories/select/ISelectTypologyInterface";

export class GetByRegionalAndPositionUseCase {
  private selectTypologyRepository: ISelectTypologyRepository;
  constructor(selectTypologyRepository: ISelectTypologyRepository) {
    this.selectTypologyRepository = selectTypologyRepository;
  }

  async handle(instituteId: number, positionId: number) {
    const listTypologies =
      await this.selectTypologyRepository.getAllTypologyByRegionalAndPosition(
        instituteId,
        positionId
      );
    console.log(listTypologies);
    return listTypologies;
  }
}
