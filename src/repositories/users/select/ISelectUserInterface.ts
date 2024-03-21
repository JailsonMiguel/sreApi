import { IUserProps } from "../../../interfaces/props/IUserProps";

export interface ISelectUserRepository {
  verifyIfAlredyByCpf(user: IUserProps): Promise<boolean>;
  getAllUsers(): Promise<IUserProps[]>;
}
