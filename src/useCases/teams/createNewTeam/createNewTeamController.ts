import { Request, Response } from 'express';
import { CreateNewTeamUseCase } from './createNewTeamUseCase';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewTeamController {
  private createNewTeamUseCase: CreateNewTeamUseCase;
  constructor(createNewTeamUseCase: CreateNewTeamUseCase) {
    this.createNewTeamUseCase = createNewTeamUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const { consultantId, description, sector, isActive } = req.body;
      if (!description) {
        throw new sreError('Campo obrigatório não preenchido!', 'Erro');
      } else {
        await this.createNewTeamUseCase.handle({
          consultantId,
          description,
          isActive
        });
      }
      return res.status(201).json({
        message: 'Equipe criada com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
