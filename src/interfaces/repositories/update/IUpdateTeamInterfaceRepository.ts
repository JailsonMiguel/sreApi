import { IUpdateTeamInterface } from '../../updates/IUpdateTeamInterface';

export interface IUpdateTeamRepository {
  updateTeam(
    teamData: IUpdateTeamInterface,
    id: number | string
  ): Promise<boolean>;
}
