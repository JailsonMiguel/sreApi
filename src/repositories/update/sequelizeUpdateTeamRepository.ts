import { IUpdateTeamRepository } from '../../interfaces/repositories/update/IUpdateTeamInterfaceRepository';
import { IUpdateTeamInterface } from '../../interfaces/updates/IUpdateTeamInterface';
import { TeamModel } from '../../models/teamModel';

export class SequelizeUpdateTeamRepository implements IUpdateTeamRepository {
  async updateTeam(
    teamData: IUpdateTeamInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await TeamModel.update(
      {
        ...teamData
      },
      {
        where: {
          id
        }
      }
    );
    if (updated[0] > 0) {
      return true;
    } else {
      return false;
    }
  }
}
