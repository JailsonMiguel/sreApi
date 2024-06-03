import { SequelizeSelectOccupationRepository } from "../../../repositories/occupations/select/sequelizeSelectOccupationRepository";
import { GetSuperintendentByInstituteController } from "./getSuperintendentsByInstituteController";
import { GetSuperintendentByInstituteUseCase } from "./getSuperintendentsByInstituteUseCase";

const selectSuperintendentByInstituteRepository = new SequelizeSelectOccupationRepository();
const getSuperintendentByInstituteUseCase = new GetSuperintendentByInstituteUseCase(
  selectSuperintendentByInstituteRepository
);
const getSuperintendentByInstituteController = new GetSuperintendentByInstituteController(
  getSuperintendentByInstituteUseCase
);

export { getSuperintendentByInstituteController  , getSuperintendentByInstituteUseCase };
