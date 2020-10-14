import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div className="nav">
      <h3> Movie List </h3>
      <p> List of Movies: {movies.length} </p>
      <p>HEJ VIV</p>
    </div>
  );
};

export default Nav;
