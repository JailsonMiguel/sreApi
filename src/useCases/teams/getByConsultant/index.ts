import { SequelizeSelectTeamRepository } from "../../../repositories/teams/select/sequelizeSelectTeamRepository";
import { GetAllTeamsByConsultantIdController } from "./getByConsultantController";
import { GetByConsultanIdUseCase } from "./getByConsultantUseCase";

const selectTeamByConsultantIdRepository = new SequelizeSelectTeamRepository();
const getAllTeamsByConsultantIdUseCase = new GetByConsultanIdUseCase(selectTeamByConsultantIdRepository);
const getAllTeamsByConsultantIdController = new GetAllTeamsByConsultantIdController(getAllTeamsByConsultantIdUseCase);

export { getAllTeamsByConsultantIdController, getAllTeamsByConsultantIdUseCase };
