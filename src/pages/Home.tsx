import axios from "axios";
import { useEffect, useState } from "react";
import MainSubVisual from "../components/MainSubVisual";
import MainVisual from "../components/MainVisual";

const Home = () => {
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=b8b6d79a65a0dd63fd6652bb2c626e45&language=ko-ko&page=1"
      )
      .then((res) => {
        setMovies(res.data);
      });
  };

  useEffect(() => {
    getMovies();
  });

  return (
    <div className="container">
      <MainVisual movie={movies} />
      <div className="mainSubVisual">
        <div className="con_title">인기있는 영화</div>
        <MainSubVisual />
        <div className="con_title">곧 개봉하는 영화</div>
        <MainSubVisual />
        <div className="con_title">평점이 좋은 영화</div>
        <MainSubVisual />
      </div>
    </div>
  );
};

export default Home;
