import { Request, Response } from 'express';
import { CreateNewSuperintendentUseCase } from './createNewSuperintendentUseCase';

export class CreateNewSuperintendentController {
  private createNewSuperintendentUseCase: CreateNewSuperintendentUseCase;
  constructor(createNewSuperintendentUseCase: CreateNewSuperintendentUseCase) {
    this.createNewSuperintendentUseCase = createNewSuperintendentUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const { regionalId, servantId, initialDate, finalDate, isActive } =
        req.body;
      await this.createNewSuperintendentUseCase.handle({
        regionalId,
        servantId,
        initialDate,
        finalDate,
        isActive
      });
      return res.status(201).json({
        message: 'Superintendente vinculado a Regional com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
