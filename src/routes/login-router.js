import express from "express";
import { Router } from "express";
import { createLogin } from "../resolvers/users/login/create-login.js";

export const loginRouter = Router();

loginRouter.post("/", createLogin);
