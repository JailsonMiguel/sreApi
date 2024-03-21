import { Request, Response } from 'express';
import { UpdatePositionUseCase } from './updatePositionUseCase';
import { IUpdatePositionInterface } from '../../../interfaces/updatesInterfaces/IUpdatePositionInterface';

export class UpdatePositionController {
  constructor(private updatePositionUseCase: UpdatePositionUseCase) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdatePositionInterface = req.body;
      const { positionId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedPosition = await this.updatePositionUseCase.handle(
        bodyData,
        positionId
      );
      if (updatedPosition) {
        res.status(200).json({
          message: 'Função alterada com sucesso'
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
