import { ISelectTeamRepository } from '../../../interfaces/repositories/select/ISelectTeamInterface';

export class GetAllTeamsUseCase {
  private selectTeamRepository: ISelectTeamRepository;
  constructor(selectTeamRepository: ISelectTeamRepository) {
    this.selectTeamRepository = selectTeamRepository;
  }
  handle = async () => {
    const listTeams = await this.selectTeamRepository.getAllTeams();
    console.log(listTeams);
    return listTeams;
  };
}
