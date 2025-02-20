import fs from "fs";

export const createMovie = (req, res) => { 
    const rawMovies = fs.readFileSync("src/DB/movies.json", "utf8");
    console.log(rawMovies);
    const movies = JSON.parse(rawMovies);
    movies.push(req.body);
    fs.writeFileSync("src/DB/movies.json", JSON.stringify(movies));
    res.send(req.body);
 };
