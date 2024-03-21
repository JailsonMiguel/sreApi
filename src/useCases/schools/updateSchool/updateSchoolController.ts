import { Request, Response } from 'express';
import { UpdateSchoolUseCase } from './updateSchoolUseCase';
import { IUpdateSchoolInterface } from '../../../interfaces/updatesInterfaces/IUpdateSchoolInterface';

export class UpdateSchoolController {
  constructor(private updateSchoolUseCase: UpdateSchoolUseCase) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateSchoolInterface = req.body;
      const { schoolId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedSchool = await this.updateSchoolUseCase.handle(
        bodyData,
        schoolId
      );
      if (updatedSchool) {
        res.status(200).json({
          message: 'Escola alterada com sucesso'
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
