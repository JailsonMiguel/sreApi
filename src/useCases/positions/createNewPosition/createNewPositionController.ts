import { Request, Response } from 'express';
import { CreateNewPositionUseCase } from './createNewPositionUseCase';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewPositionController {
  private createNewPositionUseCase: CreateNewPositionUseCase;
  constructor(createNewPositionUseCase: CreateNewPositionUseCase) {
    this.createNewPositionUseCase = createNewPositionUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const {
        teamId,
        subarea,
        parameter,
        code,
        name,
        initialDate,
        finalDate,
        isActive
      } = req.body;
      if (!subarea || !parameter) {
        throw new sreError('Campo obrigatório não preenchido!', 'Erro');
      } else {
        await this.createNewPositionUseCase.handle({
          teamId,
          subarea,
          parameter,
          code,
          name,
          initialDate,
          finalDate,
          isActive
        });
      }
      return res.status(201).json({
        message: 'Função criada com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
