import {userRouter} from './controllers/user';
import express from 'express';

const router = express.Router();

router.use('/user',userRouter);

export default router;