import { users } from "../../../index.js";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key";

export const createLogin = (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (user && user.password === password) {
    const token = jwt.sign(
      { id: user.id, username: user.username }, // Payload: user id and username
      SECRET_KEY, // Secret key to sign the token
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    return res.json({
      message: `Welcome back, ${user.name}!`,
      token: token,
    });
  } else {
    return res.status(401).json({ message: "Invalid login" });
  }
};
 