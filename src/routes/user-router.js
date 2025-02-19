import express from "express";
import { Router } from "express";
import { Authorization } from "../middleWare/authorization.js";
import { getUser } from "../resolvers/users/get-user.js";
import { createUser } from "../resolvers/users/create-user.js";
import { deleteUser } from "../resolvers/users/delete-user.js";
import { updateUser } from "../resolvers/users/update-user.js";

export const userRouter = Router();

userRouter.get("/", Authorization, getUser);
userRouter.put("/", Authorization, updateUser);
userRouter.post("/", createUser);
userRouter.delete("/", Authorization, deleteUser);
