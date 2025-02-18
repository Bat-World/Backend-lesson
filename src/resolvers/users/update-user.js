import { users } from "../../index.js";

export const updateUser = (req, res) => {
  if (users.length > 0) {
    users[0] = { id: 5, name: "Updated User" };
    res.json(users[0]);
  } else {
    res.json({ message: "No users to update" });
  }
};
