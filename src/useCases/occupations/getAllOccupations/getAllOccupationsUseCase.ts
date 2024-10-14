import { ISelectOccupationRepository } from "../../../interfaces/repositories/select/ISelectOccupationInterface";

export class GetAllOccupationsUseCase {
  private selectOccupationRepository: ISelectOccupationRepository;
  constructor(selectOccupationRepository: ISelectOccupationRepository) {
    this.selectOccupationRepository = selectOccupationRepository;
  }
  handle = async () => {
    const listOccupations =
      await this.selectOccupationRepository.getAllOccupations();
    console.log(listOccupations);
    return listOccupations;
  };
}
