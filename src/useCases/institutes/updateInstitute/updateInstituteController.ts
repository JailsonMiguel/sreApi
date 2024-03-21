import { Request, Response } from 'express';
import { UpdateInstituteUseCase } from './updateInstituteUseCase';
import { IUpdateInstituteInterface } from '../../../interfaces/updatesInterfaces/IUpdateInstituteInterface';

export class UpdateInstituteController {
  constructor(private updateInstituteUseCase: UpdateInstituteUseCase) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateInstituteInterface = req.body;
      const { instituteId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedInstitute = await this.updateInstituteUseCase.handle(
        bodyData,
        instituteId
      );
      if (updatedInstitute) {
        res.status(200).json({
          message: 'Instituto alterado com sucesso'
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
