import { Request, Response } from 'express';
import { CreateNewProfileUserInstituteUseCase } from './createNewProfileUserInstituteUseCase';

export class CreateNewProfileUserInstituteController {
  private createNewProfileUserInstituteUseCase: CreateNewProfileUserInstituteUseCase;
  constructor(
    createNewProfileUserInstituteUseCase: CreateNewProfileUserInstituteUseCase
  ) {
    this.createNewProfileUserInstituteUseCase =
      createNewProfileUserInstituteUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const {
        profileId,
        instituteId,
        userId,
        initialDate,
        finalDate,
        isActive
      } = req.body;
      await this.createNewProfileUserInstituteUseCase.handle({
        profileId,
        instituteId,
        userId,
        initialDate,
        finalDate,
        isActive
      });
      return res.status(201).json({
        message: 'Perfil de Usuário no Instituto criado com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
