import { ISelectServantRepository } from '../../../repositories/servants/select/ISelectServantInterface';

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
