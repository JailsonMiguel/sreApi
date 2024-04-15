import { ITeamProps } from '../../../interfaces/props/ITeamProps';

export interface IInsertTeamRepository {
  createTeam(team: ITeamProps): Promise<ITeamProps>;
}
