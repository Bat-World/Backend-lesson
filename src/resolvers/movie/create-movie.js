import fs from "fs";

export const createMovie = (req, res) => { 
    const rawMovies = fs.readFileSync("src/DB/movies.json");
    const movies = JSON.parse(rawMovies);
    movies.push(req.body);
    res.send(req.body);
    fs.writeFileSync("src/DB/movies.json", JSON.stringify(movies));
 };
