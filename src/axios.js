import axios from "axios";

// base URL for all the requests

const instance=axios.create({

    baseURL:"https://api.themoviedb.org/3",
});

export default instance;
