import { IConsultantProps } from "../../../interfaces/props/IConsultantProps";

export interface ISelectConsultantRepository {
  verifyIfAlredyByDescription(consultant: IConsultantProps): Promise<boolean>;
  getAllConsultants(): Promise<IConsultantProps[]>;
}
