import express from "express";
import { users } from "../../index.js";
import fs from "fs";


export const getUser = (req, res) => {
  const users = fs.readFileSync("src/DB/users.json");
  res.json(JSON.parse(users));
};
