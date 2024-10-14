import { IUpdateTeamRepository } from '../../../interfaces/repositories/update/IUpdateTeamInterfaceRepository';
import { IUpdateTeamInterface } from '../../../interfaces/updates/IUpdateTeamInterface';

export class UpdateTeamUseCase {
  constructor(private updateTeamRepository: IUpdateTeamRepository) {}

  async handle(teamData: IUpdateTeamInterface, id: string | number) {
    const updatedTeam = this.updateTeamRepository.updateTeam(teamData, id);
    return updatedTeam;
  }
}
