import { Request, Response } from 'express';
import { UpdateProfileUseCase } from './updateProfileUseCase';
import { IUpdateProfileInterface } from '../../../interfaces/updatesInterfaces/IUpdateProfileInterface';

export class UpdateProfileController {
  constructor(private updateProfileUseCase: UpdateProfileUseCase) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateProfileInterface = req.body;
      const { profileId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedProfile = await this.updateProfileUseCase.handle(
        bodyData,
        profileId
      );
      if (updatedProfile) {
        res.status(200).json({
          message: 'Perfil alterado com sucesso'
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
