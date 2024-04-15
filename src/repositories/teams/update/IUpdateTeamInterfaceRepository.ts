import { IUpdateTeamInterface } from '../../../interfaces/updatesInterfaces/IUpdateTeamInterface';

export interface IUpdateTeamRepository {
  updateTeam(
    teamData: IUpdateTeamInterface,
    id: number | string
  ): Promise<boolean>;
}
