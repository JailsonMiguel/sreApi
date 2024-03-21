import { ISchoolProps } from '../interfaces/props/ISchoolProps';

export class School {
  private schoolProps: ISchoolProps;
  constructor(schoolProps: ISchoolProps) {
    this.schoolProps = schoolProps;
  }
  get school() {
    return this.schoolProps;
  }
}
