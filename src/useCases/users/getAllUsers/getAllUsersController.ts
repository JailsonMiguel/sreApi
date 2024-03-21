import { Request, Response } from 'express';
import { GetAllUsersUseCase } from './getAllUsersUseCase';

export class GetAllUsersController {
  private getAllUsersUseCase: GetAllUsersUseCase;
  constructor(getAllUsersUseCase: GetAllUsersUseCase) {
    this.getAllUsersUseCase = getAllUsersUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listUsers = await this.getAllUsersUseCase.handle();
      return res.status(200).json({ listUsers: listUsers });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
