import { ITeamProps } from '../../../interfaces/props/ITeamProps';
import { TeamModel } from '../../../models/teamModel';
import { IInsertTeamRepository } from './IInsertTeamRepository';

export class SequelizeInsertTeamRepository implements IInsertTeamRepository {
  async createTeam(team: ITeamProps): Promise<ITeamProps> {
    const createdTeam = await TeamModel.create({
      ...team,
      active: true
    });
    return createdTeam;
  }
}
