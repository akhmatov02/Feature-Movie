import { useState } from "react";
import "./App.css";
// import { NewMovie } from "./component/newMovie/NewMovie";
import { Header } from "./component/header/Header";
import { NewMovie } from "./component/newMovie/NewMovie";

function App() {
  const [movie, setMovie] = useState([
    {
      id: 2,
      title: "Turbo",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WjO84LtDoy3CQcCvvj4Y57i_GhIjc9W1jQ&usqp=CAU",
      rating: 5,
    },
  ]);
  const newMovie = (data) => {
    const updateMovie = [...movie];
    updateMovie.push(data)
    setMovie(updateMovie)
  };

  const updateMovie = (data) => {
    const newMovie = [...movie].map((item) => {
      if (item.id === data.id) {
        item.title = data.title;
        item.img = data.img;
        item.rating = data.rating;
      }
      return item;
    });
  };
  return (
    <div className="App">
      <Header newMovie={newMovie} />
      <NewMovie  movie={movie} setMovie={setMovie} updateMovie={updateMovie} />
    </div>
  );
}

export default App;
