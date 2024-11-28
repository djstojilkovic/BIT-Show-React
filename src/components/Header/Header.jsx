import { useState, useEffect } from "react";
import { SRC_URL } from "../../constants";
export const Header = ({ setClickedFilm }) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="head">
        <h4
          onClick={() => {
            setClickedFilm();
          }}
        >
          BIT Show
        </h4>
        <div className="src">
          <input
            onBlur={(e) => {
              setTimeout(() => {
                e.target.value = "";
                setSearchValue(e.target.value);
              }, 200);
            }}
            onInput={(e) => {
              setSearchValue(e.target.value);
            }}
            className="search"
            type="text"
            placeholder="Search..."
          />
          <div className="result">
            {useEffect(() => {
              fetch(SRC_URL + `${searchValue}`)
                .then((res) => res.json())
                .then((data) => setData(data));
            }, [searchValue])}
            <p>
              {data
                ? data.map((el, i) => {
                    return (
                      <div
                        className="res-div"
                        key={i}
                        onClick={() => {
                          setSearchValue("");
                          setClickedFilm(JSON.stringify(el.show));
                        }}
                      >
                        {el.show.name}
                      </div>
                    );
                  })
                : null}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
