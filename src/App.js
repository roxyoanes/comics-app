import React from "react";
import { comicApi, secondComicApi } from "./api";
import "./App.css";

const App = () => {
  const [comic, setComic] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [number, setNumber] = React.useState("");

  React.useEffect(() => {
    comicApi().then((data) => {
      setComic(data);
    });
  }, []);

  const handleSearch = () => {
    if (number >= 1 || number <= 2296) {
      secondComicApi(number).then((data) => {
        setComic(data);
      });
    }
  };

  const handleInputNumber = (e) => {
    setNumber(e.target.value);
  };

  const getRandomQuote = (min, max) => {
    min = 1;
    max = 2296;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    secondComicApi(randomNumber).then((data) => {
      setComic(data);
    });
  };

  if (error) {
    return <p>error</p>;
  } else if (comic) {
    return (
      <div className="App">
        <div>
          <p>{comic.safe_title}</p>
          <img src={comic.img} alt={comic.alt} />
        </div>
        <div className="input-container">
          <input className="search-input" type="text" onChange={handleInputNumber} value={number} />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
        <button className="random-btn" onClick={getRandomQuote}>Random</button>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default App;
