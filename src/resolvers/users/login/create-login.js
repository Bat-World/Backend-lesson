import { users } from "../../../index.js";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key";

export const createLogin = (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (user && user.password === password) {
    const token = jwt.sign(
      { id: user.id, username: user.username }, 
      SECRET_KEY, 
      { expiresIn: "1h" }  
    );

    return res.json({
      message: `Welcome back, ${user.name}!`,
      token: token,
    });
  } else {
    return res.status(401).json({ message: "Invalid login" });
  }
};
 