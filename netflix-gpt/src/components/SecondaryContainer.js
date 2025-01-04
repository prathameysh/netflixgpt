import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies= useSelector(store=>store.movie);

    return (
      movies.nowPlayingMovies && (
        <div className="bg-black">
        <div className=" mt-0 md:-mt-40 pl-4 md:pl-12 relative z-10">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          </div>
        </div>
      )
    );
  };
  export default SecondaryContainer;