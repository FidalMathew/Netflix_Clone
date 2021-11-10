import React, { useEffect, useState } from "react";
import axiosInst from "./axios";
import requests from "./requests";
import "./Banner.css";

const pic_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieObjectData = await axiosInst.get(
        requests.fetchNetflixOriginals
      );

      //   console.log(movieObjectData);
      setMovie(
        movieObjectData.data.results[
          Math.floor(Math.random() * (movieObjectData.data.results.length - 1))
        ]
      );
      return requests;
    };

    fetchMovie();

    // return () => {
    //   cleanup;
    // };
  }, []);

  const truncate = (str, n) => {
    //function to limit the no of words in the description
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div
      className="banner"
      style={{
        //     backgroundSize: "cover",
        backgroundImage: `url(${pic_url}${Movie.backdrop_path})`,
        //     backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{Movie?.name || Movie?.original_name}</h1>
        <div>
          <button className="banner_button">Play </button>
          <button className="banner_button">My List</button>
        </div>
        <h3 className="banner_description">{truncate(Movie.overview, 150)}</h3>
      </div>
      <div className="banner_fadebottom"></div>
    </div>
  );
}

export default Banner;
