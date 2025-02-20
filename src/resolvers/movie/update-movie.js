import fs from "fs";

export const updateMovie = (req, res) => {

  const movies = JSON.parse(fs.readFileSync("src/DB/movies.json", "utf8"));
 if(movies.length > 0){
    movies[0]= {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
    }
    fs.writeFileSync("src/DB/movies.json", JSON.stringify(movies));
    res.json({ message: "Movie updated" });
  } else {
    res.json({ message: "Movie not found" });
  }
}