import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies.movies?.nowPlayingMovies);
  if (movies == null) return;

  console.log(movies);
  // const mainMovie = movies;

  const { original_title, overview } = movies;
  console.log("maincont");
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
