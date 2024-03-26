import { Request, Response } from 'express';
import { CreateNewServantUseCase } from './createNewServantUseCase';

export class CreateNewServantController {
  private createNewServantUseCase: CreateNewServantUseCase;
  constructor(createNewServantUseCase: CreateNewServantUseCase) {
    this.createNewServantUseCase = createNewServantUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const {
        positionId,
        regionalId,
        userId,
        functionalEmail,
        loadWorkload,
        officialAct,
        initialDate,
        finalDate,
        isActive
      } = req.body;
      await this.createNewServantUseCase.handle({
        positionId,
        regionalId,
        userId,
        functionalEmail,
        loadWorkload,
        officialAct,
        initialDate,
        finalDate,
        isActive
      });
      return res.status(201).json({
        message: 'Servidor e função vinculado com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
