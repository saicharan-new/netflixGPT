import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import Secondary from "./Secondary";
const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="">
      <Header />
      <MainContainer/>
      <Secondary/>
      maincon
    </div>
  );
};

export default Browse;
