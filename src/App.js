import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Navbar";

import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Trending" fetch_URL={requests.fetchTrending} isLarge />
      <Row
        title="Netflix Originals"
        fetch_URL={requests.fetchNetflixOriginals}
      />
      <Row title="Top Rated" fetch_URL={requests.fetchTopRated} />
      <Row title="Action Movies" fetch_URL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetch_URL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetch_URL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies " fetch_URL={requests.fetchRomanceMovies} />
      <Row title="Documentaries " fetch_URL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
