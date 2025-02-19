import express from "express";
import fs from "fs";


export const getUser = (req, res) => {
var token = req.headers.authorization;
if (!token) {
  return res.status(401).json({ message: "Invalid token" });
}
  const users = fs.readFileSync("src/DB/users.json");
  var user = JSON.parse(users).find((user) => user.username === req.user.username);
  if (user) {
    return res.json(user);
  } else {
    return res.status(401).json({ message: "Invalid user" });
  }
 
  res.json(JSON.parse(users));
};
