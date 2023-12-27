import "./App.css";
import { useEffect } from "react";
import { fetchFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./Store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SearchResult from "./Pages/searchResult/SearchResult";
import Details from "./Pages/details/Details";
import Explore from "./Pages/explore/Explore";
import Error from "./Pages/error/Error";

function App() {
  const dispatch = useDispatch();
  const { url, genres } = useSelector((state) => state.home);
  const fetchApiConfiguration = () => {
    fetchFromApi("/configuration").then((data) => {
      const url = {
        backdrop: data.images?.secure_base_url + "original",
        poster: data.images?.secure_base_url + "original",
        profile: data.images?.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url));
    });
  };
  useEffect(() => {
    fetchApiConfiguration();
    fetchGenres();
  }, []);


  const fetchGenres = async () => {
    let promises = [];
    let endPoints = ["movie", "tv"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map(({ name, id }) => (allGenres[id] = name));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
