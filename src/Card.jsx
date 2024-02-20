import movies from "./movies";
import { useState } from "react";

function Card() {

    const maxRatio = (a, b) => {return (a + b)}
      const [visible, setVisible] = useState(false);

    function removeCard() {
        setVisible((prev) => !prev);
    };

    return (
        <section className="cards">
            {movies.map((movie, index) =>
            <div className="card" id={movie.id}>
                { visible &&
                (<button onClick={removeCard()}>X</button>)}
                <h3><b>{movie.title}</b></h3>
                <p>Category : {movie.category}</p>
                <meter min="0" max={maxRatio(movie.likes, movie.dislikes)} value={movie.likes} className="movie-rating"></meter>
            </div>
            )}
        </section>
        )

}

export default Card