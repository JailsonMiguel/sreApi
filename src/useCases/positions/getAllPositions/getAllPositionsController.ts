import { Request, Response } from 'express';
import { GetAllPositionsUseCase } from './getAllPositionsUseCase';

export class GetAllPositionsController {
  private getAllPositionsUseCase: GetAllPositionsUseCase;
  constructor(getAllPositionsUseCase: GetAllPositionsUseCase) {
    this.getAllPositionsUseCase = getAllPositionsUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listPositions = await this.getAllPositionsUseCase.handle();
      return res.status(200).json({ listPositions: listPositions });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
