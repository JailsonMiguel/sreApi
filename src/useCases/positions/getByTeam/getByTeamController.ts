import { Request, Response } from 'express';
import { GetByTeamIdUseCase } from './getByTeamUseCase';

export class GetAllPositionsByTeamIdController {
  private getAllPositionsByTeamIdUseCase: GetByTeamIdUseCase;
  constructor(getAllPositionsByTeamIdUseCase: GetByTeamIdUseCase) {
    this.getAllPositionsByTeamIdUseCase = getAllPositionsByTeamIdUseCase;
  }
   handle = async (req: Request, res: Response)=> {
    try {
      const teamId: number = Number(req.params.teamId); 
      if (isNaN(teamId)) {
        return res.status(400).json({ message: "Id inválido"});        
      }
      const listPositions = await this.getAllPositionsByTeamIdUseCase.handle(teamId);
      if (listPositions) {
        return res.status(200).json(listPositions)
      } else {
        return res.status(404).json({message: "Não foi encontrado subárea para esta equipe"})
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Ocorreu um erro interno no servidor" });
    }
  };
}
