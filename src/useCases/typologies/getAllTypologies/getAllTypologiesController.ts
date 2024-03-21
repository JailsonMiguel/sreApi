import { Request, Response } from 'express';
import { GetAllTypologiesUseCase } from './getAllTypologiesUseCase';

export class GetAllTypologiesController {
  private getAllTypologiesUseCase: GetAllTypologiesUseCase;
  constructor(getAllTypologiesUseCase: GetAllTypologiesUseCase) {
    this.getAllTypologiesUseCase = getAllTypologiesUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listTypologies = await this.getAllTypologiesUseCase.handle();
      return res.status(200).json({ listTypologies: listTypologies });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
