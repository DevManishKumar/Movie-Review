import Header from "./Header";
import Movie from "./Movie";
import movies from "./data.json";

const Index = () => {
  return (
    <>
      <Header />
      <div className="main">
        {movies.map((element, index) => {
          return (
            <Movie
              key={index}
              rating={element.rating}
              title={element.Title}
              year={element.Year}
              image={element.Poster}
              runtime={element.Runtime}
            />
          );
        })}
      </div>
    </>
  );
};
export default Index;
