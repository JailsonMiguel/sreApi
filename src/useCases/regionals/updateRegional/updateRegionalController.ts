import { Request, Response } from 'express';
import { UpdateRegionalUseCase } from './updateRegionalUseCase';
import { IUpdateRegionalInterface } from '../../../interfaces/updatesInterfaces/IUpdateRegionalInterface';

export class UpdateRegionalController {
  constructor(private updateRegionalUseCase: UpdateRegionalUseCase) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateRegionalInterface = req.body;
      const { regionalId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedRegional = await this.updateRegionalUseCase.handle(
        bodyData,
        regionalId
      );
      if (updatedRegional) {
        res.status(200).json({
          message: 'Superintendência Regional alterada com sucesso'
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
