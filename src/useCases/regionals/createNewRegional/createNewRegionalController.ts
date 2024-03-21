import { Request, Response } from 'express';
import { CreateNewRegionalUseCase } from './createNewRegionalUseCase';

export class CreateNewRegionalController {
  private createNewRegionalUseCase: CreateNewRegionalUseCase;
  constructor(createNewRegionalUseCase: CreateNewRegionalUseCase) {
    this.createNewRegionalUseCase = createNewRegionalUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const { instituteId, isActive } = req.body;
      await this.createNewRegionalUseCase.handle({
        instituteId,
        isActive
      });
      return res.status(201).json({
        message: 'Superintendência Regional criada com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
