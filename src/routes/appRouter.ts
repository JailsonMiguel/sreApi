import { Router } from 'express';
import { instituteRouter } from './institute';
import { positionRouter } from './position';
import { schoolRouter } from './school';
import { typologyRouter } from './typologies';
import { servantRouter } from './servant';
import { regionalRouter } from './regional';
import { consultantRouter } from './consultant';
import { teamRouter } from './team';
import { occupationRouter } from './occupation';

const appRouter = Router();

appRouter.use(instituteRouter);
appRouter.use(positionRouter);
appRouter.use(regionalRouter);
appRouter.use(schoolRouter);
appRouter.use(typologyRouter);
appRouter.use(servantRouter);
appRouter.use(consultantRouter);
appRouter.use(teamRouter);
appRouter.use(occupationRouter);

export { appRouter };
