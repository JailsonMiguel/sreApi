import { ISelectSuperintendentRepository } from "../../../repositories/superintendents/select/ISelectSuperintendentInterface";

export class GetByRegionalIdUseCase {
  private selectSuperintendentRepository: ISelectSuperintendentRepository;
  constructor(selectSuperintendentRepository: ISelectSuperintendentRepository) {
    this.selectSuperintendentRepository = selectSuperintendentRepository;
  }

  async handle(regionaltId: number) {
    const listSuperintendents =
      await this.selectSuperintendentRepository.getAllSuperintendentByRegional(regionaltId);
    console.log(listSuperintendents);
    return listSuperintendents;
  }
}
