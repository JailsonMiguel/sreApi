import { ISelectServantRepository } from '../../../interfaces/repositories/select/ISelectServantInterface';

export class GetServantByCpfUseCase {
  private selectServantRepository: ISelectServantRepository;
  constructor(selectServantRepository: ISelectServantRepository) {
    this.selectServantRepository = selectServantRepository;
  }
  handle = async (cpf: string) => {
    const servantFound =
      await this.selectServantRepository.getServantByCpf(cpf);
    console.log(servantFound);
    return servantFound;
  };
}
