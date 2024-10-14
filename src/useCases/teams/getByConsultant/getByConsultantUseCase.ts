import { ISelectTeamRepository } from "../../../interfaces/repositories/select/ISelectTeamInterface";

export class GetByConsultanIdUseCase {
  private selectTeamRepository: ISelectTeamRepository;
  constructor(selectTeamRepository: ISelectTeamRepository) {
    this.selectTeamRepository = selectTeamRepository;
  }

  async handle(consultantId: number) {
    const listTeams =
      await this.selectTeamRepository.getTeamByConsultant(consultantId);
    console.log(listTeams);
    return listTeams;
  }
}
