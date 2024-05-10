export interface IOccupationProps {
  id?: number;
  positionId: number;
  instituteId: number;
  servantId: number;
  functionEmail: string;
  loadWorkload: number;
  offcialAct: string;
  initialDate: Date;
  finalDate: Date;
  isActive: boolean;
}
