import { IUpdateTeamInterface } from '../../../interfaces/updatesInterfaces/IUpdateTeamInterface';
import { IUpdateTeamRepository } from '../../../repositories/teams/update/IUpdateTeamInterfaceRepository';

export class UpdateTeamUseCase {
  constructor(private updateTeamRepository: IUpdateTeamRepository) {}

  async handle(teamData: IUpdateTeamInterface, id: string | number) {
    const updatedTeam = this.updateTeamRepository.updateTeam(teamData, id);
    return updatedTeam;
  }
}
