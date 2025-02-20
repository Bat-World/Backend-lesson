import { users } from "../../index.js";
import fs from "fs";

export const updateUser = (req, res) => {
  const rawUsers= fs.readFileSync("src/DB/users.json");
  const users = JSON.parse(rawUsers
  );
  if (users.length > 0) {
    users[0] = { id: 5, name: "Updated User" };
    res.json(users[0]);
  } else {
    res.json({ message: "No users to update" });
  }
  fs.writeFileSync("src/DB/users.json", JSON.stringify(users));
};
