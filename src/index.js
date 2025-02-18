
import { userRouter } from "./routes/user-router.js";
import { loginRouter } from "./routes/login-router.js";
import express from "express";
import fs from "fs";
const app = express();
const port = 3000;

export let users = [
  { id: 1, name: "John Doe", username: "johndoe", password: "password1" },
  { id: 2, name: "Jane Smith", username: "janesmith", password: "password2" },
];

app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
