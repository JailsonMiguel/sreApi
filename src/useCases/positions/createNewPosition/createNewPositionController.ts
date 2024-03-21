import { Request, Response } from 'express';
import { CreateNewPositionUseCase } from './createNewPositionUseCase';

export class CreateNewPositionController {
  private createNewPositionUseCase: CreateNewPositionUseCase;
  constructor(createNewPositionUseCase: CreateNewPositionUseCase) {
    this.createNewPositionUseCase = createNewPositionUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const { name, description, initialDate, finalDate, isActive } = req.body;
      await this.createNewPositionUseCase.handle({
        name,
        description,
        initialDate,
        finalDate,
        isActive
      });
      return res.status(201).json({
        message: 'Função criada com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
