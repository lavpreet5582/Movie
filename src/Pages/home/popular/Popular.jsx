import React, { useState } from "react";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../Components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../Components/carousel/Carousel";

const Popular = () => {
  const switchTabsList = ["Movies", "Tv Shows"];
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/popular`);

  const onTabChange = (tab) => {
    console.log(tab);
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="crouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Popular</span>
        <SwitchTabs data={switchTabsList} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel
        data={data?.results}
        loading={loading}
        endpoint={endPoint}
      />
    </div>
  );
};

export default Popular;
