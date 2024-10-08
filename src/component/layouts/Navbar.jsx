import React from "react";
import { Link } from "react-router-dom";
import FilmIcon from "../element/icon/FilmIcon";

const Navbar = () => {
  return (
    <div
      style={{ padding: "0.7rem 0 0.3rem 0.1rem" }}
      className="flex flex-wrap items-center bg-secondary custom:bg-black"
    >
      <div className="flex items-center justify-start  w-11/12 ">
        <div className="ml-4 ">
          <FilmIcon fill={`white`} />
        </div>
        <div className="flex items-center mr-4 mt-3">
          <Link to={`/`} className="font-primary text-3xl text-white mx-2">
            React{" "}
          </Link>
          <p className="font-primary text-3xl text-primary">Movie</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
