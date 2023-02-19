import express from 'express';

import { userRouter } from './modules/user/userRouter.js';

const server = express();
server.use(express.json());

server.use('/user', userRouter);

server.listen(3333, () => console.log('Listening on port 3333'));
