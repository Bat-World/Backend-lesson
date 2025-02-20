import {Router} from "express";
import { getAllMovies, getMoviesFromTMDB } from "../resolvers/movie/get-movie.js";
import { createMovie } from "../resolvers/movie/create-movie.js";
import { deleteMovie } from "../resolvers/movie/delete-movie.js";
import { updateMovie } from "../resolvers/movie/update-movie.js";
// import { Authorization } from "../middleWare/authorization.js";


export const movieRouter = Router();


movieRouter.get("/from-tmdb", getMoviesFromTMDB);
movieRouter.get("/", getAllMovies);
movieRouter.post("/",  createMovie);
movieRouter.delete("/",  deleteMovie);
movieRouter.put("/",  updateMovie);
