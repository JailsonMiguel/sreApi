import { ISelectPositionRepository } from "../../../interfaces/repositories/select/ISelectPositionInterface";

export class GetAllPositionsUseCase {
  private selectPositionRepository: ISelectPositionRepository;
  constructor(selectPositionRepository: ISelectPositionRepository) {
    this.selectPositionRepository = selectPositionRepository;
  }
  handle = async () => {
    const listPositions = await this.selectPositionRepository.getAllPositions();
    console.log(listPositions);
    return listPositions;
  };
}
