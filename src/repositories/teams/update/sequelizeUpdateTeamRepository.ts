import { IUpdateTeamInterface } from '../../../interfaces/updatesInterfaces/IUpdateTeamInterface';
import { TeamModel } from '../../../models/teamModel';
import { IUpdateTeamRepository } from './IUpdateTeamInterfaceRepository';

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
