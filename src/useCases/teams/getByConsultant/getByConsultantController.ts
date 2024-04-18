import { Request, Response } from 'express';
import { GetByConsultanIdUseCase } from './getByConsultantUseCase';

export class GetAllTeamsByConsultantIdController {
  private getAllTeamsByConsultantIdUseCase: GetByConsultanIdUseCase;
  constructor(getAllTeamsByConsultantIdUseCase: GetByConsultanIdUseCase) {
    this.getAllTeamsByConsultantIdUseCase = getAllTeamsByConsultantIdUseCase;
  }
   handle = async (req: Request, res: Response)=> {
    try {
      const consultantId: number = Number(req.params.consultantId); 
      // const { consultantId } = req.params; 
      if (isNaN(consultantId)) {
        return res.status(400).json({ message: "Id inválido"});        
      }
      const listTeams = await this.getAllTeamsByConsultantIdUseCase.handle(consultantId);
      if (listTeams) {
        return res.status(200).json(listTeams)
      } else {
        return res.status(404).json({message: "Não foi encontrado equipe para esta assessoria"})
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Ocorreu um erro interno no servidor" });
    }
  };
}
