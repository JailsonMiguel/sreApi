import { Request, Response } from 'express';
import { CreateNewServantUseCase } from './createNewServantUseCase';

export class CreateNewServantController {
  private createNewServantUseCase: CreateNewServantUseCase;
  constructor(createNewServantUseCase: CreateNewServantUseCase) {
    this.createNewServantUseCase = createNewServantUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const { name, email, dateBirth, functionalNumber, isActive } = req.body;
      await this.createNewServantUseCase.handle({
        name,
        email,
        dateBirth,
        functionalNumber,
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
