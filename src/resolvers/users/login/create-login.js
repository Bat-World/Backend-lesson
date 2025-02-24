import { users } from "../../../index.js";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key";

export const createLogin = (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (user) {
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: "Error comparing password" });
      }


      if (isMatch) {
        const token = jwt.sign(
          { id: user.id, username: user.username },
          SECRET_KEY,
          { expiresIn: "1h" } 
        ); 

        return res.json({
          message: `Welcome back, ${user.username}!`,
          token: token,
        });
      } else {
        return res.status(401).json({ message: "Invalid username or password" });
      }
    });
  } else {
    return res.status(401).json({ message: "Invalid username or password" });
  }
};
