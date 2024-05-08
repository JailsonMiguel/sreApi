import { Request, Response } from 'express';
import { UpdateSuperintendentUseCase } from './updateSchoolSupervisorUseCase';
import { IUpdateSuperintendentInterface } from '../../../interfaces/updatesInterfaces/IUpdateSuperintendentInterface';

export class UpdateSuperintendentController {
  constructor(
    private updateSuperintendentUseCase: UpdateSuperintendentUseCase
  ) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateSuperintendentInterface = req.body;
      const { superintendentId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedSuperintendent =
        await this.updateSuperintendentUseCase.handle(
          bodyData,
          superintendentId
        );
      if (updatedSuperintendent) {
        res.status(200).json({
          message: 'Alteração realizada com sucesso'
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
