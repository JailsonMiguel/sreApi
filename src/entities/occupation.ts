import { IOccupationProps } from '../interfaces/props/IOccupationProps';

export class Occupation {
  private occupationProps: IOccupationProps;
  constructor(occupationProps: IOccupationProps) {
    this.occupationProps = occupationProps;
  }
  get occupation() {
    return this.occupationProps;
  }
}
