import React, { useState, useEffect } from "react";
// import YouTube from "react-youtube";
import axiosInst from "./axios"; //using created instance
import "./Row.css";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/"; //pic url

function Row(props) {
  const [movies, setMovies] = useState([]);

  const [trailerUrl, settrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axiosInst.get(props.fetch_URL);
      // console.log(request.data.results);

      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [props.fetch_URL]);

  const handle = (val) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(val?.name || val?.title || "").then((url) => {
        settrailerUrl(url);
      });
      // .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row_posters">
        {movies
          .filter((val) => {
            return val.backdrop_path !== null && val.poster_path !== null;
          })
          .map((val, index) => (
            <img
              key={val.id}
              onClick={() => handle(val)}
              className={`poster ${props.isLarge && "poster_large "}`}
              src={`${base_url}${
                props.isLarge ? val.poster_path : val.backdrop_path
              }`}
              alt={`${val.name}`}
            />
          ))}
      </div>

      <div className="Video_player">
        {trailerUrl && (
          <ReactPlayer url={trailerUrl} playing={true} controls={true} />
        )}
      </div>
    </div>
  );
}

export default Row;
