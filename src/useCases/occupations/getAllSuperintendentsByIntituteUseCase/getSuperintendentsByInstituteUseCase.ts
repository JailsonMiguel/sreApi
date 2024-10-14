import { ISelectOccupationRepository } from "../../../interfaces/repositories/select/ISelectOccupationInterface";

export class GetSuperintendentByInstituteUseCase {
  private selectSuperintendentByInstituteRepository: ISelectOccupationRepository;
  constructor(
    selectSuperintendentByInstituteRepository: ISelectOccupationRepository
  ) {
    this.selectSuperintendentByInstituteRepository =
      selectSuperintendentByInstituteRepository;
  }
  handle = async (instituteId: number, positionId: number) => {
    const listOccupations =
      await this.selectSuperintendentByInstituteRepository.getAllOccupationByInstituteAndPosition(
        instituteId,
        positionId
      );
    console.log(listOccupations);
    return listOccupations;
  };
}
