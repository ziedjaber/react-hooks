
import MovieCard from "./MovieCard";

import 'bootstrap/dist/css/bootstrap.css'
const MovieList=({movies})=>{
    return(
        <div style={{display:"flex"}}>
        {movies.map(movie => (
        <MovieCard movie={movie}  />
      ))}
        </div>
        
    );
}
export default MovieList ;