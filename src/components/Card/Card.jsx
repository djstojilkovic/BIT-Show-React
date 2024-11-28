export const Card = ({ show, setClickedFilm }) => {
  return (
    <div
      className="card"
      onClick={() => {
        setClickedFilm(JSON.stringify(show));
      }}
    >
      <img src={show.image.medium} alt="show" />
      <p>{show.name}</p>
    </div>
  );
};
