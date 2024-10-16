import { ISelectInstituteRepository } from "../../../interfaces/repositories/select/ISelectInstituteInterface";

export class GetAllInstitutesUseCase {
  private selectInstituteRepository: ISelectInstituteRepository;
  constructor(selectInstituteRepository: ISelectInstituteRepository) {
    this.selectInstituteRepository = selectInstituteRepository;
  }
  handle = async () => {
    const listInstitutes =
      await this.selectInstituteRepository.getAllInstitutes();
    console.log(listInstitutes);
    return listInstitutes;
  };
}
