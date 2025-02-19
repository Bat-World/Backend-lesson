import express from "express";
import fs from "fs";


export const getUser = (req, res) => {
var token = req.headers.authorization;
if (!token) {
  return res.status(401).json({ message: "Invalid token" });
}
token = token.replace("Bearer ", "");
  const users = fs.readFileSync("src/DB/users.json");
  res.json(JSON.parse(users));
};
