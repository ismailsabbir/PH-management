import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { UserRoutes } from './app/modules/user/user.router';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'],credentials:true }));
app.get('/', (req: Request, res: Response) => {
  res.send('Hello PH Managemant Server !');
});
app.post('/create-student', UserRoutes);
app.use('/api/v1', router);
app.use(globalErrorHandler);
app.use(notFound);
export default app;
