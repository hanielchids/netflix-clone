const API_Key = "e28e599716ebd5591df29438ffcb184f";
const Request = {
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=e28e599716ebd5591df29438ffcb184f&with_networks=213/discover/tv?api_key=${API_Key}&with_networks=213`,
  fetchtrending: `https://api.themoviedb.org/3/trending/all/day?api_key=e28e599716ebd5591df29438ffcb184f`,

  fetchDiscover: `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}&language=en-US&page=1`,
  fetchTV: `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_Key}`,
  fetchTvTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_Key}&language=en-US&page=1`,
  fetchRecommndation: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_Key}`,
};
export default Request;
