import { Request, Response } from 'express';
import { UpdateProfileUserInstituteUseCase } from './updateProfileUserInstituteUseCase';
import { IUpdateProfileUserInstituteInterface } from '../../../interfaces/updatesInterfaces/IUpdateProfileUserInstituteInterface';

export class UpdateProfileUserInstituteController {
  constructor(
    private updateProfileUserInstituteUseCase: UpdateProfileUserInstituteUseCase
  ) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateProfileUserInstituteInterface = req.body;
      const { profileUserInstituteId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedProfileUserInstitute =
        await this.updateProfileUserInstituteUseCase.handle(
          bodyData,
          profileUserInstituteId
        );
      if (updatedProfileUserInstitute) {
        res.status(200).json({
          message: 'Perfil de Usuário no Instituto alterado com sucesso'
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
