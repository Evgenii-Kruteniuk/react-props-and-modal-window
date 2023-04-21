import React from "react";
import "./App.css";
import Film from "./components/Film";

function App() {
  return (
    <div className="App">
      <Film
        name="Avatar"
        src="https://i.pinimg.com/originals/6d/44/82/6d4482ab03ca7de7405144221256edcd.jpg"
        produser="Джеймс Кэмерон"
        year={2009}
        price=" 250$"
      />
      <Film
        name="Gladiator"
        src="https://avatars.dzeninfra.ru/get-zen_doc/5231833/pub_62823156ed0a9814cf129f8f_6282324a19bce16505ab677f/scale_1200"
        produser="Ридли Скотт"
        year={2000}
        price=" 200$"
        likeFilm
      />
      <Film
        name="Jurassic park"
        src="https://get.wallhere.com/photo/1920x1080-px-adventure-dinosaur-fantasy-fi-film-jurassic-movie-park-poster-sci-1671017.jpg"
        produser="Стивен Спилберг"
        year={1993}
        price=" 85$"
      />
      <Film
        name="The matrix"
        src="https://papik.pro/uploads/posts/2021-10/1634581776_17-papik-pro-p-poster-matritsa-19.jpg"
        produser="Лилли Вачовски"
        year={1999}
        price=" 90$"
      />
    </div>
  );
}

export default App;
