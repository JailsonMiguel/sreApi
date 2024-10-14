import { ITeamProps } from '../../../interfaces/props/ITeamProps';

export interface ISelectTeamRepository {
  verifyIfAlredyByDescription(team: ITeamProps): Promise<boolean>;
  getAllTeams(): Promise<ITeamProps[]>;
  getTeamByConsultant(consultantId: number): Promise<ITeamProps[]>;
}
