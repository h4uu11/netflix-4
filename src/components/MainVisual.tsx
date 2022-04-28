import { Link } from "react-router-dom";

const MainVisual = ({ movie }) => {
  return (
    <div
      className="main_visual"
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${
          movie && movie.results[1].backdrop_path
        })`,
      }}
    >
      <div className="info">
        <div className="inner">
          <div className="title">{movie && movie.results[1].title}</div>
          <div className="desc">{movie && movie.results[1].overview}</div>
          <div className="btn_wrap">
            <Link to={""} className="btn_link">
              상세정보
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVisual;
