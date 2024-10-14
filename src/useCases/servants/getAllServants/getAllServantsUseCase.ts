import { ISelectServantRepository } from '../../../interfaces/repositories/select/ISelectServantInterface';

export class GetAllServantsUseCase {
  private selectServantRepository: ISelectServantRepository;
  constructor(selectServantRepository: ISelectServantRepository) {
    this.selectServantRepository = selectServantRepository;
  }
  handle = async () => {
    const listServants = await this.selectServantRepository.getAllServant();
    console.log(listServants);
    return listServants;
  };
}
