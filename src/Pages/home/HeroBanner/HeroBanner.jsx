import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroBanner.scss";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../Components/LazyLoadImage/Img";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    // const bg = apiConfig.originalImage(
    //   data?.results[Math.floor(Math.random() * 20)]?.backdrop_path
    // );
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  const searchQueryHandler = (event) => {
    event.preventDefault();
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setQuery("");
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdropImage">
          <img src={background} alt="background" />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Spiderman</span>
          <span className="subTitle">Experience the rise of Miles Morales</span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
