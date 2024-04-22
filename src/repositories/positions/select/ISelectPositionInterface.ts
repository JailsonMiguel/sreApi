import { IPositionProps } from '../../../interfaces/props/IPositionProps';

export interface ISelectPositionRepository {
  verifyIfAlredyBySubarea(position: IPositionProps): Promise<boolean>;
  getAllPositions(): Promise<IPositionProps[]>;
  getPositionBySubarea(subarea: string): Promise<IPositionProps[]>;
  getPositionBySector(sector: string): Promise<IPositionProps[]>;
  getPositionByTeamId(teamId: number): Promise<IPositionProps[]>;
}
