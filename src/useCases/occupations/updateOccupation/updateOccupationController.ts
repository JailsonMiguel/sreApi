import { Request, Response } from 'express';
import { UpdateOccupationUseCase } from './updateOccupationUseCase';
import { IUpdateOccupationInterface } from '../../../interfaces/updatesInterfaces/IUpdateOccupationInterface';

export class UpdateOccupationController {
  constructor(private updateOccupationUseCase: UpdateOccupationUseCase) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateOccupationInterface = req.body;
      const { occupationId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedOccupation = await this.updateOccupationUseCase.handle(
        bodyData,
        occupationId
      );
      if (updatedOccupation) {
        res.status(200).json({
          message: 'Servidor vinculado à função com sucesso'
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
