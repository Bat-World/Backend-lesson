import express from "express";
import fs from "fs";

export const createUser = (req, res) => {
  const rawUsers = fs.readFileSync("src/DB/users.json");
  const users = JSON.parse(rawUsers);
  users.push(req.body);
  fs.writeFileSync("src/DB/users.json", JSON.stringify(users));
  res.send(req.body);
};
