import "./single-page.css";
import { useState, useEffect } from "react";
import { FILM_URL } from "../../constants";
export const SinglePage = ({ clickedFilm }) => {
  const [cast, setCast] = useState([]);
  const [season, setSeason] = useState([]);

  useEffect(() => {
    fetch(FILM_URL + `/${clickedFilm.id}/seasons`)
      .then((res) => res.json())
      .then((data) => {
        setSeason(data);
      });
  }, []);

  useEffect(() => {
    fetch(FILM_URL + `/${clickedFilm.id}/cast`)
      .then((res) => res.json())
      .then((data) => {
        setCast(data.slice(0, 8));
      });
  }, []);
  return (
    <>
      <div className="info-container">
        <div className="info-left">
          <h1 className="name">{clickedFilm?.name ?? "N/A"}</h1>
          <img
            className="img"
            src={clickedFilm.image?.original ?? "N/A"}
            alt="film"
          />
        </div>

        <div className="info-right">
          <h2>Show Information</h2>
          <p>Network: {clickedFilm.network?.name ?? "N/A"}</p>
          <p>Rating: {clickedFilm.rating?.average ?? "N/A"}</p>
          <p>Language: {clickedFilm?.language ?? "N/A"}</p>
          <p>Status: {clickedFilm?.status ?? "N/A"}</p>
          <p>Runtime: {clickedFilm?.runtime ?? "N/A"} minutes</p>

          <div className="seasons">
            <h2>Seasons</h2>
            {season
              ? season.map((el) => {
                  return (
                    <div>
                      <ul>
                        <li>
                          Season Start: {el?.premiereDate ?? "N/A"}{" "}
                          <p>Season End: {el?.endDate ?? "N/A"}</p>
                        </li>
                      </ul>
                    </div>
                  );
                })
              : null}
          </div>
        </div>

        <div className="info-summary">
          <h2>Show Summary</h2>
          <p dangerouslySetInnerHTML={{ __html: clickedFilm?.summary }}></p>
        </div>

        <h2 className="cast-h2">Cast</h2>
        <div className="info-cast">
          {cast
            ? cast.map((el) => {
                return (
                  <div>
                    <img src={el.person.image.medium} alt="castImg" />
                    <p>
                      Name: <span>{el.person?.name ?? "N/A"}</span>
                    </p>
                    <p>
                      Played: <span>{el.character?.name ?? "N/A"}</span>
                    </p>
                    <p>
                      Country: <span>{el.person.country?.name ?? "N/A"}</span>
                    </p>
                    <p>
                      Birthday: <span>{el.person?.birthday ?? "N/A"}</span>
                    </p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <br />
      <br />
    </>
  );
};
