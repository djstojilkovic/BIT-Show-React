import "./home-page.css";
import { Card } from "../../components/Card/Card";
export const HomePage = ({ setClickedFilm, shows }) => {
  const topRated = shows.sort((a, b) => b.rating.average - a.rating.average);
  return (
    <div>
      <h1>Popular Shows</h1>
      <div className="shows">
        {topRated.slice(0, 50).map((show) => {
          return <Card show={show} setClickedFilm={setClickedFilm} />;
        })}
      </div>
    </div>
  );
};
