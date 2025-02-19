import jwt from "jsonwebtoken";
const SECRET_KEY = "your_secret_key";

export const Authorization = (req, res, next) => {
  var token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Invalid token" });
  }
  token = token.replace("Bearer ", "");
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};
