import express from "express";
import { users } from "../../index.js";

export const createUser = (req, res) => {
    users.push(req.body);
    res.send(req.body);
  }
