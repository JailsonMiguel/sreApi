import { IPositionProps } from '../interfaces/props/IPositionProps';

export class Position {
  private positionProps: IPositionProps;
  constructor(positionProps: IPositionProps) {
    this.positionProps = positionProps;
  }
  get position() {
    return this.positionProps;
  }
}
