import { users } from "../../index.js";
import express from "express";

export const deleteUser = (req, res) => {
  if (users.length > 0) {
    const removedUser = users.pop();
    res.json(removedUser);
  } else {
    res.json({ message: "No users to delete" });
  }
};