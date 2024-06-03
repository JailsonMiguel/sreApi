import { ISelectOccupationRepository } from '../../../repositories/occupations/select/ISelectOccupationInterface';

export class GetOccupationActiveByRegionalUseCase {
  private selectOccupationRepository: ISelectOccupationRepository;
  constructor(selectOccupationRepository: ISelectOccupationRepository) {
    this.selectOccupationRepository = selectOccupationRepository;
  }
  handle = async (instituteId: number, positionId: number) => {
    const listOccupations =
      await this.selectOccupationRepository.getActiveByInstituteAndPosition(
        instituteId,
        positionId
      );
    console.log(listOccupations);
    return listOccupations;
  };
}
