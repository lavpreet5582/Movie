import React, { useState } from 'react'
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../Components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../Components/carousel/Carousel'

const Trending = () => {
    const switchTabsList = ["Day", "Week"];
    const [endPoint, setEndPoint] = useState("day");
    const {data, loading} = useFetch(`/trending/all/${endPoint}`);

    const onTabChange = (tab) => {
        console.log(tab);
        setEndPoint(tab === "Day" ? "day" : "week");
    };
  return (
    <div className='crouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={switchTabsList} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data = {data?.results} loading = {loading}/>
    </div>
  )
}

export default Trending