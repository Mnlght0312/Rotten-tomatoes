import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieCard } from "./MovieCard";

export interface IMovie {
  _id: string;
  plot: string;
  genres: [string];
  runtime: number;
  cast: string;
  poster: string;
  title: string;
  countries: [string];
  released: Date;
  type: string;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  num_mflix_comments: number;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    dvd: string;
    critic: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    lastUpdated: Date;
    rotten: number;
    production: string;
    fresh: number;
  };
  theaterId: {
    type: number;
  };
}

const Movies = (): JSX.Element => {
  const [movies, setMovies] = useState<Array<IMovie>>([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:8080/api/movie")
      .then((res) => {
        console.log(res.data.result);

        setMovies(res.data.result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="flex justify-between py-4">
        <h1>NEW & UPCOMING MOVIES</h1>
        <h6>View All</h6>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {movies?.map((item, index) => {
          return <MovieCard item={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default Movies;
