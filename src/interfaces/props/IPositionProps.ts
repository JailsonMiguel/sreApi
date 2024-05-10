export interface IPositionProps {
  id?: number;
  teamId: number;
  subarea: string;
  parameter: string;
  code: string;
  name: string;
  initialDate: Date;
  finalDate: Date;
  isActive: boolean;
}
