const Movie = (props) => {
  const { image, title, year, runtime, rating } = props;
  return (
    <div className="movie">
      <img src={image} alt="img" />
      <p className="text-pad-10">{rating}</p>
      <p className="text-pad-10">{title}</p>
      <p className="text-pad-10">Year : {year}</p>
      <p className="text-pad-10">Runtime : {runtime}</p>
    </div>
  );
};
export default Movie;
