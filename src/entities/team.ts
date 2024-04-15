import { ITeamProps } from '../interfaces/props/ITeamProps';

export class Team {
  private teamProps: ITeamProps;
  constructor(teamProps: ITeamProps) {
    this.teamProps = teamProps;
  }
  get team() {
    return this.teamProps;
  }
}
