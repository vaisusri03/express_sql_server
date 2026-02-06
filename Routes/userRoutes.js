import { createUserController,deleteUserController,getAllUsersController,updateUserPasswordController } from "../Controller/userController.js";

import express from 'express'
const userRoute= express.Router();
userRoute.post('/signup',createUserController);
userRoute.get('/getusers',getAllUsersController);
userRoute.put('/updatepass/:id',updateUserPasswordController);
userRoute.delete('/del/:id',deleteUserController);

export default userRoute

