import { ITeamProps } from '../../props/ITeamProps';

export interface IInsertTeamRepository {
  createTeam(team: ITeamProps): Promise<ITeamProps>;
}
