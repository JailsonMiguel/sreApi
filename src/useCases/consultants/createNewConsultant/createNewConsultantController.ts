import { Request, Response } from 'express';
import { CreateNewConsultantUseCase } from './createNewConsultantUseCase';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewConsultantController {
  private createNewConsultantUseCase: CreateNewConsultantUseCase;
  constructor(createNewConsultantUseCase: CreateNewConsultantUseCase) {
    this.createNewConsultantUseCase = createNewConsultantUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const { description, isActive } = req.body;
      if (!description) {
        throw new sreError('Campo obrigatório não preenchido!', 'Erro');
      }
      await this.createNewConsultantUseCase.handle({
        description,
        isActive
      });
      return res.status(201).json({
        message: 'Assessoria criada com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
