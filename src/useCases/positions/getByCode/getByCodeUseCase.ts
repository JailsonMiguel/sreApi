import { ISelectPositionRepository } from "../../../interfaces/repositories/select/ISelectPositionInterface";

export class GetByCodeUseCase {
  private selectPositionRepository: ISelectPositionRepository;
  constructor(selectPositionRepository: ISelectPositionRepository) {
    this.selectPositionRepository = selectPositionRepository;
  }

  async handle(code: string) {
    const positionId =
      await this.selectPositionRepository.getPositionByCode(code);
    console.log(positionId);
    return positionId;
  }
}
