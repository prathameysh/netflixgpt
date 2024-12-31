import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className=" w-screen h-screen overflow-hidden">
      <iframe 
        className="aspect-video bottom-0 top-0 left-0 w-[150%] h-[150%] -translate-x-1/4 -translate-y-1/4 z-0"
        src={"https://www.youtube.com/embed/" +trailerVideo?.key +"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
};
export default VideoBackground;