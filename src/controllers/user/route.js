const express = require('express');
import UserController from './controller';
import {addUserValidation} from './validation'

const userRouter = express.Router();

// @route   POST api/users
// @desc    Test Route
// @access  public

userRouter.post('/',addUserValidation,UserController.addUser)

userRouter.get('/:email',UserController.getUser);



export default userRouter;

