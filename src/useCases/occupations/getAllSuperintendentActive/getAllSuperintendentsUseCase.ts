import { ISelectOccupationRepository } from '../../../repositories/occupations/select/ISelectOccupationInterface';

export class GetAllSupertintendentsUseCase {
  private selectOccupationRepository: ISelectOccupationRepository;
  constructor(selectOccupationRepository: ISelectOccupationRepository) {
    this.selectOccupationRepository = selectOccupationRepository;
  }
  handle = async (positionId: number) => {
    const listOccupations =
      await this.selectOccupationRepository.getAllOccupationByPosition(positionId);
    console.log(listOccupations);
    return listOccupations;
  };
}
