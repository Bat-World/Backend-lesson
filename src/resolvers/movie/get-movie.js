import fs from "fs";


const url =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=81ea651f54754aefbed10e4e57266046";
const options = { method: "GET", headers: { accept: "application/json" } };

export const getMoviesFromTMDB = (req, res) => {
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      fs.writeFileSync(
        "src/DB/movies.json",
        JSON.stringify(json.results.slice(0, 5))
      );
      res.send("success")
    })
    .catch((err) => console.error(err));
};
 


export const getAllMovies = (req, res) => {
    const movies = fs.readFileSync("src/DB/movies.json", "utf8")
    console.log(movies);
    
    res.send({movies});
}
