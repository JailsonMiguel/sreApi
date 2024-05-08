import { ISelectSuperintendentRepository } from '../../../repositories/superintendents/select/ISelectSuperintendentInterface';

export class GetAllSuperintendentsUseCase {
  private selectSuperintendentRepository: ISelectSuperintendentRepository;
  constructor(selectSuperintendentRepository: ISelectSuperintendentRepository) {
    this.selectSuperintendentRepository = selectSuperintendentRepository;
  }
  handle = async () => {
    const listSuperintendents =
      await this.selectSuperintendentRepository.getAllSuperintendents();
    console.log(listSuperintendents);
    return listSuperintendents;
  };
}
