import "./App.css";
import { useState, useEffect } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { SinglePage } from "./pages/SinglePage/SinglePage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FILM_URL } from "./constants";

function App() {
  const [clickedFilm, setClickedFilm] = useState(null);
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    fetch(FILM_URL)
      .then((res) => res.json())
      .then((data) => {
        setShowData(data);
      });
  }, []);

  return (
    <div className="App">
      <Header setClickedFilm={setClickedFilm} />
      {!clickedFilm ? (
        <HomePage setClickedFilm={setClickedFilm} shows={showData} />
      ) : (
        <SinglePage clickedFilm={JSON.parse(clickedFilm)} />
      )}
      <Footer />
    </div>
  );
}

export default App;
