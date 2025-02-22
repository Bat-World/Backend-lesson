import { userRouter } from "./routes/user-router.js";
import {movieRouter} from "./routes/movie-router.js";
import express from "express";
import cors from "cors";


const app = express();
const port = 3000;

export let users = [
  { id: 1, name: "John Doe", username: "johndoe", password: "password1" },
  { id: 2, name: "Jane Smith", username: "janesmith", password: "password2" },
];


app.use(cors({
  origin: 'http://localhost:3001'
}));

app.use(express.json());

app.use("/users", userRouter);
app.use("/movies", movieRouter);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
