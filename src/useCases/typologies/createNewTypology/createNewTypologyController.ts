import { Request, Response } from 'express';
import { CreateNewTypologyUseCase } from './createNewTypologyUseCase';

export class CreateNewTypologyController {
  private createNewTypologyUseCase: CreateNewTypologyUseCase;
  constructor(createNewTypologyUseCase: CreateNewTypologyUseCase) {
    this.createNewTypologyUseCase = createNewTypologyUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const { positionId, regionalId, authorized, legalSupport, isActive } =
        req.body;
      await this.createNewTypologyUseCase.handle({
        positionId,
        regionalId,
        authorized,
        legalSupport,
        isActive
      });
      return res.status(201).json({
        message: 'Tipologia criada com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
