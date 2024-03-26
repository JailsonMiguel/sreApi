import { Request, Response } from 'express';
import { UpdateServantUseCase } from './updateServantUseCase';
import { IUpdateServantInterface } from '../../../interfaces/updatesInterfaces/IUpdateServantInterface';

export class UpdateServantController {
  constructor(private updateServantUseCase: UpdateServantUseCase) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateServantInterface = req.body;
      const { servantId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedServant = await this.updateServantUseCase.handle(
        bodyData,
        servantId
      );
      if (updatedServant) {
        res.status(200).json({
          message: 'Alterado com sucesso'
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
