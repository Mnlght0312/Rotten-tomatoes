import { useRouter } from "next/router";
import React from "react";

const MovieDetails = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <div>
      Movie Details
      <h2>{query.date}</h2>
      <h2>{query.slug}</h2>
      <h2>{query.id}</h2>
    </div>
  );
};

export default MovieDetails;
