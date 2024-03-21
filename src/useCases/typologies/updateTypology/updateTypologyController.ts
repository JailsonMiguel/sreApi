import { Request, Response } from 'express';
import { UpdateTypologyUseCase } from './updateTypologyUseCase';
import { IUpdateTypologyInterface } from '../../../interfaces/updatesInterfaces/IUpdateTypologyInterface';

export class UpdateTypologyController {
  constructor(private updateTypologyUseCase: UpdateTypologyUseCase) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateTypologyInterface = req.body;
      const { typologyId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedTypology = await this.updateTypologyUseCase.handle(
        bodyData,
        typologyId
      );
      if (updatedTypology) {
        res.status(200).json({
          message: 'Tipologia alterada com sucesso'
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
