export interface IOccupationProps {
  id?: number;
  positionId: number;
  instituteId: number;
  servantId: string;
  functionEmail: string;
  loadWorkload: number;
  offcialAct: string;
  initialDate: Date;
  finalDate: Date;
  isActive: boolean;
}
