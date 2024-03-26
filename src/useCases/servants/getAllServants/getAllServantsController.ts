import { Request, Response } from 'express';
import { GetAllServantsUseCase } from './getAllServantsUseCase';

export class GetAllServantsController {
  private getAllServantsUseCase: GetAllServantsUseCase;
  constructor(getAllServantsUseCase: GetAllServantsUseCase) {
    this.getAllServantsUseCase = getAllServantsUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listServants = await this.getAllServantsUseCase.handle();
      return res.status(200).json({ listServants: listServants });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
