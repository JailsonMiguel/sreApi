import { Router } from "express";
import { appRouter } from "./appRouter";

const router = Router();

router.use(appRouter);

export { router };
