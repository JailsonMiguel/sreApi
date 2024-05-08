import { Request, Response } from 'express';
import { GetAllSuperintendentsUseCase } from './getAllSuperintendentsUseCase';

export class GetAllSuperintendentsController {
  private getAllSuperintendentsUseCase: GetAllSuperintendentsUseCase;
  constructor(getAllSuperintendentsUseCase: GetAllSuperintendentsUseCase) {
    this.getAllSuperintendentsUseCase = getAllSuperintendentsUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listSuperintendents =
        await this.getAllSuperintendentsUseCase.handle();
      return res.status(200).json({ listSuperintendents: listSuperintendents });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
