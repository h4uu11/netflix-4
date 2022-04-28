let init = {
  movie: "",
};

export default function reducer(state = init) {
  return {
    movies:
      "https://api.themoviedb.org/3/movie/upcoming?api_key=b8b6d79a65a0dd63fd6652bb2c626e45&language=en-US&page=1",
  };

  const newState = { ...state };
  return newState;
}
