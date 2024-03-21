import { IInstituteProps } from "../interfaces/props/IInstituteProps";

export class Institute {
  private instituteProps: IInstituteProps;
  constructor(instituteProps: IInstituteProps) {
    this.instituteProps = instituteProps;
  }
  get institute() {
    return this.instituteProps;
  }
}
