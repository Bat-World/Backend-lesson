import express from "express";
import { users } from "../../index.js";

export const getUser = (req, res) => {
  res.json(users);
};
