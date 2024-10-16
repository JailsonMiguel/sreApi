import { ITeamProps } from '../../interfaces/props/ITeamProps';
import { ISelectTeamRepository } from '../../interfaces/repositories/select/ISelectTeamInterface';
import { TeamModel } from '../../models/teamModel';

export class SequelizeSelectTeamRepository implements ISelectTeamRepository {
  async getAllTeams(): Promise<ITeamProps[]> {
    const allTeams = await TeamModel.findAll();
    return allTeams;
  }

  async verifyIfAlredyByDescription(team: ITeamProps): Promise<boolean> {
    const existsTeam = await TeamModel.findOne({
      where: {
        description: team.description
      }
    });
    if (existsTeam) {
      return true;
    } else {
      return false;
    }
  }

  async getTeamByConsultant(consultantId: number): Promise<ITeamProps[]> {
    const allTeams = await TeamModel.findAll({
      where: {
        consultantId: consultantId
      },
      order: [
        ['isActive', 'DESC'],
        ['description', 'ASC']
      ]
    });
    return allTeams;
  }
}
