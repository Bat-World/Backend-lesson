
import fs from "fs";

export const deleteUser = (req, res) => {
  const users = JSON.parse(fs.readFileSync("src/DB/users.json"));
  if (users.length > 0) {
    const removedUser = users.pop();
    res.json(removedUser);
    fs.writeFileSync("src/DB/users.json", JSON.stringify(users));
  } else {
    res.json({ message: "No users to delete" });
  }
};