import { Request, Response } from 'express';
import { UpdateTeamUseCase } from './updateTeamUseCase';
import { IUpdateTeamInterface } from '../../../interfaces/updatesInterfaces/IUpdateTeamInterface';

export class UpdateTeamController {
  constructor(private updateTeamUseCase: UpdateTeamUseCase) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateTeamInterface = req.body;
      const { teamId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedTeam = await this.updateTeamUseCase.handle(bodyData, teamId);
      if (updatedTeam) {
        res.status(200).json({
          message: 'Equipe alterada com sucesso'
        });
      } else {
        res.status(200).json({ message: 'Nenhuma linha afetada' });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
